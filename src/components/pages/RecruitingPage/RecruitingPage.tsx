import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { Recruiting, Users } from 'api';
import { CommitInfo } from 'api/recruiting';
import style from './recruitingPage.module.scss';
import RecruitingTable from './RecruitingTable';
import { convertTeamNameToSnakeCase } from 'utils';
import { Team } from 'api/teams';


const RecruitingPage = () => {

    const [userTeams, setUserTeams] = React.useState<Team[]>();
    const [recruitInfo, setRecruitInfo] = React.useState<CommitInfo>();
    const [school, setSchool] = React.useState<string>(userTeams ? userTeams[0].team_name : 'Syracuse');

    React.useEffect(() => {
        (async () => {
            const userTeamsResponse = await Users.getUserTeams();
            const response = await Recruiting.getRecruits();

            if (response) {
                setRecruitInfo(response)
            }

            if (userTeamsResponse) {
                for (let i = 0; i < userTeamsResponse.user_teams.length; i++) {
                    setUserTeams(userTeamsResponse.user_teams);
                }
            }
        })();
    }, []);


    return (
        <div>
            <div className={style.headerContainer}>
                <h1 className={style.header}>Recruiting</h1>
            </div>
            
            <div className={style.btnContainer}>
                { userTeams && (
                    userTeams.map( team => {
                        return (
                            <Button
                                name={team.team_name}
                                active={school === team.team_name}
                                onClick={() => setSchool(team.team_name)}
                            >
                                {team.team_name}
                            </Button>
                        )
                    })
                )}
            </div>

            <div className={style.recruitingContainer}>
                { userTeams && (
                        userTeams.map( team => {
                            if (recruitInfo && school === (team.team_name)) {
                                return (
                                    <RecruitingTable 
                                        commitsArr={recruitInfo[convertTeamNameToSnakeCase(school)]}
                                    />
                                )
                            } else {
                                return null;
                            }
                        })
                )}
            </div>
        </div>
    )
}

export default RecruitingPage
