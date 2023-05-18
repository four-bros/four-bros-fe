import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Teams } from 'api';
import { TeamsDropdown } from 'components/common';
import type { Team, TeamDetails } from 'api/teams';
import TeamOverview from './components/TeamOverview/TeamOverview';
import TeamRoster from './components/TeamRoster/TeamRoster';
import TeamLeaders from './components/TeamLeaders/TeamLeaders';
import style from './teamPage.module.scss';
import { DropdownTeamOption } from '../TeamsPage/TeamsPage';


const TeamPage = () => {

    const { teamId } = useParams();
    const [allTeams, setAllTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] = React.useState<DropdownTeamOption[]>();
    const [teamDetails, setTeamDetails] = React.useState<TeamDetails>();
    const [infoType, setInfoType] = React.useState<string>('overview');
    const navigate = useNavigate()

    React.useEffect(() => {
        if (teamId) {
            (async () => {
                const allTeams = await Teams.getTeams();
                const teamDetails = await Teams.getTeamDetails(teamId);
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
                    setTeamDetails(teamDetails);
                }
            })();
        }
    }, [teamId]);


    const handleTeamChange = async (_: any, { value }: any) => {
        if (allTeams) {
            const team = allTeams[value];
            navigate(`/team/${team.id}`);
        }
    };

    const teamPage = (
        <div>
            {teamOptions && (
                <TeamsDropdown
                    options={teamOptions}
                    setSelection={handleTeamChange}
                />
            )}

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

            <div className='page-container'>
                {teamId && teamDetails && (
                    <div>
                        <TeamOverview
                            infoType={infoType}
                            teamId={teamId}
                            teamDetails={teamDetails}
                        />
                        <hr />
                        <TeamLeaders
                            teamId={teamId}
                            infoType={infoType}
                            teamDetails={teamDetails}
                        />
                        <hr />
                        {infoType === 'overview' && (
                            <div className={style.rosterContainer}>
                                <TeamRoster teamId={teamId} teamDetails={teamDetails} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return teamPage;
}


export default TeamPage;
