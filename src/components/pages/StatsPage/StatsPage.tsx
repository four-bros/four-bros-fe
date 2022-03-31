import * as React from 'react';

import { Stats, Users } from 'api';
import { RecordsInfo} from 'api/records';
import StatsTable from './components/StatsTable';
import style from './statsPage.module.scss';


const StatsPage = () => {

    const isFirstRender = React.useRef(true);
    const [stats, setStats] = React.useState<RecordsInfo>();
    const [year, setYear] = React.useState<number>();

    React.useEffect(() => {
        (async () => {
            const stats = await Stats.getSeasonLeaders();
            const weekYear = await Users.getUserTeams();
            if (stats) {
                setStats(stats)
            }
            if (weekYear) {
                setYear(weekYear.week_year.year)
            }
        })();
        isFirstRender.current = false;
        return;
    }, []);

    return (
        <div>
            {year && (
                <div className={style.headerContainer}>
                    <h1>{year} Season Stats</h1>
                </div>
            )}

            {stats && (
                <StatsTable
                    leaders={stats}
                />
            )}
        </div>
    )
}

export default StatsPage;
