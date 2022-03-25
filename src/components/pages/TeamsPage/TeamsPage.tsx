import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { Teams } from 'api';

import { TeamsDropdown, NavBar } from 'components/common';

import type { SingleTeamInfo, Team } from 'api/teams';

import { SingleTeamLeaders } from 'api/teams';

import TeamOverview from './components/TeamOverview';
import TeamRoster from './components/TeamRoster';
import TeamLeaders from './components/TeamLeaders';

export interface DropdownTeamOption {
    key: number;
    value: number;
    text: string;
}

const TeamsPage = () => {
    const isFirstRender = React.useRef(true);
    const [allTeams, setAllTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] =
        React.useState<DropdownTeamOption[]>();
    const [selectedTeam, setSelectedTeam] = React.useState<any>(null);
    const [singleTeam, setSingleTeam] = React.useState<SingleTeamInfo>();
    const [teamLeaders, setTeamLeaders] = React.useState<SingleTeamLeaders>();
    const [infoType, setInfoType] = React.useState<string>('overview');
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (isFirstRender.current) {
            (async () => {
                const teams = await Teams.getTeams();
                console.log(teams);
                let newList: DropdownTeamOption[] = [];
                if (teams) {
                    for (let i = 0; i < teams.length; i++) {
                        newList.push({
                            key: teams[i].id,
                            value: i,
                            text: `${teams[i].team_name} ${teams[i].nickname}`,
                        });
                    }
                    setTeamOptions(newList);
                    setAllTeams(teams);
                }
            })();
            isFirstRender.current = false;
            setIsLoading(false)
            return;
        }
    }, []);

    const handleChange = (_: any, { value }: any) => {
        setSelectedTeam(value);
        getTeam(value);
    };

    const getTeam = async (idx: string) => {
        if (allTeams) {
            const team = await Teams.getSingleTeam(allTeams[idx].id);
            const leaders = await Teams.getSingleTeamLeaders(allTeams[idx].id);
            if (leaders) {
                setTeamLeaders(leaders);
            }
            if (team) {
                setSingleTeam(team);
            }
        }
    };

    const handleClick = (value: string) => {
        setInfoType(value);
    };

    if (isLoading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            <NavBar />

            {teamOptions && (
                <TeamsDropdown
                    options={teamOptions}
                    setSelection={handleChange}
                    selection={selectedTeam}
                />
            )}

            <hr />

            <div className='buttonsContainer'>
                <Button
                    name='overview'
                    active={infoType === 'overview'}
                    onClick={() => handleClick('overview')}
                >
                    Overview
                </Button>
                <Button
                    name='stats'
                    active={infoType === 'stats'}
                    onClick={() => handleClick('stats')}
                >
                    Stats
                </Button>
            </div>

            <div className='page-container'>
                {allTeams && singleTeam && (
                    <div>
                        <>
                            <TeamOverview
                                simplifiedTeam={allTeams[selectedTeam]}
                                overview={singleTeam.team_details}
                                overallStats={singleTeam.team_stats}
                                infoType={infoType}
                            />

                            <hr />

                            {teamLeaders && (
                                <TeamLeaders
                                    leaders={teamLeaders}
                                    infoType={infoType}
                                />
                            )}

                            <hr />

                            {infoType === 'overview' && (
                                <TeamRoster roster={singleTeam.team_roster} />
                            )}
                        </>
                    </div>
                )}
            </div>
        </>
    );
};

export default TeamsPage;
