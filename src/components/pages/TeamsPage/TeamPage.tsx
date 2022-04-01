import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Teams } from 'api';
import { TeamsDropdown } from 'components/common';
import type { SingleTeamInfo, Team } from 'api/teams';
import { SingleTeamLeaders } from 'api/teams';
import TeamOverview from './components/TeamOverview';
import TeamRoster from './components/TeamRoster';
import TeamLeaders from './components/TeamLeaders';
import style from '../TeamsPage/teamsPage.module.scss';
import { DropdownTeamOption } from './TeamsPage';


const TeamPage = () => {

    const isFirstRender = React.useRef(true);
    const { teamId } = useParams();
    const [allTeams, setAllTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] = React.useState<DropdownTeamOption[]>();
    const [singleTeam, setSingleTeam] = React.useState<SingleTeamInfo>();
    const [teamLeaders, setTeamLeaders] = React.useState<SingleTeamLeaders>();
    const [infoType, setInfoType] = React.useState<string>('overview');
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isFirstRender.current && teamId) {
            (async () => {
                const allTeams = await Teams.getTeams();
                const team = await Teams.getSingleTeam(teamId);
                const leaders = await Teams.getSingleTeamLeaders(teamId
                    )
                let newList: DropdownTeamOption[] = [];
                if (allTeams) {
                    for (let i = 0; i < allTeams.length; i++) {
                        newList.push({
                            key: allTeams[i].id,
                            value: i,
                            text: `${allTeams[i].team_name} ${allTeams[i].nickname}`,
                        });
                    }
                    setTeamOptions(newList);
                    setAllTeams(allTeams);
                }
                if (team) {
                    setSingleTeam(team);
                }
                if (leaders) {
                    setTeamLeaders(leaders);
                }
            })();

            isFirstRender.current = false;
            return;
        }
    }, [teamId]);


    const handleTeamChange = async (_: any, { value }: any) => {
        if (allTeams) {
            const team = allTeams[value];
            const teamId = team.id.toString()
            const teamResponse = await Teams.getSingleTeam(teamId);
            const leaders = await Teams.getSingleTeamLeaders(teamId);
            if (leaders) {
                setTeamLeaders(leaders);
            }
            if (teamResponse) {
                setSingleTeam(teamResponse);
            }
            navigate(`/team/${teamId}`);
        }
    };


    return (
        <div>

            {teamOptions && (
                <TeamsDropdown
                    options={teamOptions}
                    setSelection={handleTeamChange}
                />
            )}

            {singleTeam && (
                <div className={style.btnContainer}>
                    <Button
                        name='overview'
                        active={infoType === 'overview'}
                        onClick={() => setInfoType('overview')}
                    >
                        Overview
                    </Button>
                    <Button
                        name='stats'
                        active={infoType === 'stats'}
                        onClick={() => setInfoType('stats')}
                    >
                        Stats
                    </Button>
                </div>
            )}

            <div className='page-container'>
                {allTeams && singleTeam && (
                    <div>
                        <>
                            <TeamOverview
                                simplifiedTeam={singleTeam.team_details}
                                overview={singleTeam.team_details}
                                overallStats={singleTeam.team_stats}
                                infoType={infoType}
                            />

                            <hr />

                            {teamLeaders && (
                                <>
                                    <div className={style.headerContainer}>
                                        <h1>{singleTeam.team_details.team_name} Team Leaders</h1>
                                    </div>
                                    <TeamLeaders
                                        leaders={teamLeaders}
                                        infoType={infoType}
                                    />
                                </>
                            )}

                            <hr />

                            {infoType === 'overview' && (
                                <>
                                    <div className={style.headerContainer}>
                                        <h1>{singleTeam.team_details.team_name} Roster</h1>
                                    </div>
                                    <TeamRoster roster={singleTeam.team_roster} />
                                </>
                            )}
                        </>
                    </div>
                )}
            </div>
        </div>
    )

}


export default TeamPage;
