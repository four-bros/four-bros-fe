import React from 'react';
import { Users } from 'api';
import { TeamsDropdown, NavBar } from 'components/common';

import style from './homePage.module.scss';

export const HomePage = () => {
    const isFirstRender = React.useRef(true);
    const [data, setData] = React.useState();
    const [teamOptions, setTeamOptions] = React.useState();
    const [week, setWeek] = React.useState();
    const [year, setYear] = React.useState();

    React.useEffect(() => {
        if (isFirstRender.current) {
            (async () => {
                const data = await Users.getUserTeams();
                let newList = [];
                for (let i = 0; i < data.user_teams.length; i++) {
                    newList.push({
                        key: data.user_teams[i].id,
                        value: i,
                        text: `${data.user_teams[i].team_name} ${data.user_teams[i].nickname}`,
                    });
                }
                setTeamOptions(newList);
                setData(data);
                setWeek(data.week_year.week);
                setYear(data.week_year.year);
            })();
            isFirstRender.current = false;
            return;
        }
    }, []);

    const handleChange = () => {
        // Todo: figure out a way to link to a team page (if possible)
    }

    return (
        <div>
            <NavBar />
            <div className='page-container'>
                <div className={style.welcomeContainer}>
                    <h1>Welcome to 4bros</h1>
                    <h1>Week {week}, {year}</h1>
                </div>

                <TeamsDropdown
                options={teamOptions}
                setSelection={handleChange}
                />
            </div>
        </div>
    );
};

export default HomePage;
