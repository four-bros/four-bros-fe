import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import { TeamsDropdown } from 'components/common';

import style from './homePage.module.scss';
import { Team } from '../../../interfaces/Teams';
import UserTeamsPlayerStats from './components/UserTeamsPlayerStats/UserTeamsPlayerStats';
import { Button } from 'semantic-ui-react';
import UserTeamsStatsPage from './components/UserTeamsStats/UserTeamsStats';

export const HomePage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [userTeams, setUserTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] = React.useState();
    const [week, setWeek] = React.useState<number>();
    const [year, setYear] = React.useState<number>();
    const [statsCategory, setStatsCategory] = React.useState<string>('playerStats');

    React.useEffect(() => {
        (async () => {
            const home = await Users.getUserTeams()
            const teams = await Teams.getTeams();
            let newList: any = [];
            if (teams) {
                for (let i = 0; i < teams.length; i++) {
                    newList.push({
                        key: teams[i].id,
                        value: i,
                        text: `${teams[i].team_name} ${teams[i].nickname}`,
                    });
                }
                setTeamOptions(newList);
                setWeek(home.week_year.week);
                setYear(home.week_year.year);
                setUserTeams(teams);
                setIsLoading(false);
            }
        })();
    }, []);

    const handleTeamChange = async (_: any, { value }: any) => {
        if (userTeams) {
            const team = userTeams[value];
            const teamId = team.id.toString();
            navigate(`/team/${teamId}`);
        }
    };

    const homePage = (
        <div>
            {week && (
                <div className='page-container'>
                    <div className={style.welcomeContainer}>
                        <h1>Welcome to 4bros</h1>
                        <h1>
                            Week {week}, {year}
                        </h1>
                    </div>

                    {teamOptions && (
                        <TeamsDropdown
                            options={teamOptions}
                            setSelection={handleTeamChange}
                        />
                    )}
                    <div className={style.btnContainer}>
                        <Button
                            name='playerStats'
                            active={statsCategory === 'playerStats'}
                            onClick={() => setStatsCategory('playerStats')}
                        >
                            Users Player Stats
                        </Button>
                        <Button
                            name='teamStats'
                            active={statsCategory === 'teamStats'}
                            onClick={() => setStatsCategory('teamStats')}
                        >
                            Users Team Stats
                        </Button>
                    </div>
                    {statsCategory === 'playerStats' && (
                        <UserTeamsPlayerStats />
                    )}

                    {statsCategory === 'teamStats' && (
                        <UserTeamsStatsPage />
                    )}
                </div>
            )}
        </div>
    )

    return isLoading ? <LoadingSpinner /> : homePage;

}

export default HomePage;
