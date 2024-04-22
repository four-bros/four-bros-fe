import * as React from 'react';

import { Button, Icon } from 'semantic-ui-react';
import { Recruiting, Users } from 'api';
import { CommitInfo } from '../../../interfaces/Commits';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import MobileTable from 'components/common/Tables/MobileTable';
import DesktopTable from 'components/common/Tables/DesktopTable';
import RecruitingTable from './components/RecrutingTable/RecruitingTable';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { convertTeamNameToSnakeCase } from 'utils';
import { Team } from '../../../interfaces/Teams';
import style from './recruitingPage.module.scss';


const RecruitingPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [userTeams, setUserTeams] = React.useState<Team[]>();
    const [recruitInfo, setRecruitInfo] = React.useState<CommitInfo>();
    const [school, setSchool] = React.useState<string>();
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            const userTeamsResponse = await Users.getUserTeams();
            const recruitingResponse = await Recruiting.getRecruits();

            if (userTeamsResponse) {
                for (let i = 0; i < userTeamsResponse.user_teams.length; i++) {
                    setUserTeams(userTeamsResponse.user_teams);
                    setSchool(userTeamsResponse.user_teams[0].team_name);
                }
            }

            if (recruitingResponse) {
                setRecruitInfo(recruitingResponse);
            }
            setIsLoading(false);
        })();
    }, []);

    const tableHeaders = ['Rank', 'Commit', 'Pos.', 'Stars'];

    const recruitingPage = (
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

            { userTeams && (
                userTeams.map(team => {
                    if (recruitInfo && school === (team.team_name)) {
                        return (
                            <div className={style.recruitingContainer}>
                                <div className={style.overview}>
                                    <div className={style.teamOverview}>
                                        <h1 className={style.teamName}>{team.team_name}</h1>
                                        <h3 className={style.commitCount}>Total commits: {recruitInfo[convertTeamNameToSnakeCase(school)]['commits'].length}</h3>
                                        <h3 className={style.commitCount}>Top 100 commits: {recruitInfo[convertTeamNameToSnakeCase(school)]['top_100']}</h3>
                                    </div>
                                    <div className={style.starContainer}>
                                        <div className={style.starOverview}>
                                            {Object.entries(recruitInfo[convertTeamNameToSnakeCase(school)]['stars']).reverse().map(([star, count]) => {
                                                const starNumber = Number(star);
                                                const starsArray: any[] = []
                                                for (let i = 0; i < starNumber; i++) {
                                                    starsArray.push(<Icon name='star' />)
                                                }   
                                                
                                                return (
                                                    <div className={style.starRow}>
                                                        <p className={style.count}>{count}</p>
                                                        <p className={style.star}>{starsArray}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={style.averageContainer}>
                                            <p className={style.average}>{recruitInfo[convertTeamNameToSnakeCase(school)]['avg_star'] }</p>
                                            <p>Average Stars</p>
                                        </div>
                                    </div>
                                </div>
                                <RecruitingTable 
                                    commitsArr={recruitInfo[convertTeamNameToSnakeCase(school)]['commits']}
                                    tableHeaders={tableHeaders}
                                    tableSize={mobile ? 'small' : 'large'}
                                    compact={mobile ? true : false}
                                    unstackable={mobile ? true : false}
                                />
                            </div>
                        )
                    } else {
                        return null;
                    }
                })
            )}
        </div>
    );


    return isLoading ? <LoadingSpinner /> : recruitingPage;
}

export default RecruitingPage
