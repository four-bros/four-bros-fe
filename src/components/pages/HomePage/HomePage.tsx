import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'api';
import { TeamsDropdown } from 'components/common';

import style from './homePage.module.scss';
import { Team } from 'api/teams';

export const HomePage = () => {
    const isFirstRender = React.useRef(true);
    const navigate = useNavigate();
    const [userTeams, setUserTeams] = React.useState<Team[]>();
    const [teamOptions, setTeamOptions] = React.useState();
    const [week, setWeek] = React.useState<number>();
    const [year, setYear] = React.useState<number>();

    React.useEffect(() => {
        if (isFirstRender.current) {
            (async () => {
                const data = await Users.getUserTeams();
                let newList: any = [];
                if (data) {
                    for (let i = 0; i < data.user_teams.length; i++) {
                        newList.push({
                            key: data.user_teams[i].id,
                            value: i,
                            text: `${data.user_teams[i].team_name} ${data.user_teams[i].nickname}`,
                        });
                    }
                    setTeamOptions(newList);
                    setWeek(data.week_year.week);
                    setYear(data.week_year.year);
                    setUserTeams(data.user_teams)
                }
            })();
            isFirstRender.current = false;
            return;
        }
    }, []);

    const handleTeamChange = async (_: any, { value }: any) => {
        if (userTeams) {
            const team = userTeams[value];
            const teamId = team.id.toString();
            navigate(`/team/${teamId}`);
        }
    };

    return (
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
                </div>
            )}
        </div>
    );
};

export default HomePage;
