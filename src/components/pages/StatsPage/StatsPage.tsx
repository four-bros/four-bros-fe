import * as React from 'react';

import { Stats, Users } from 'api';
import { RecordsInfo} from '../../../interfaces/Stats';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import StatsTable from './components/StatsTable/StatsTable';
import style from './statsPage.module.scss';


const StatsPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [stats, setStats] = React.useState<RecordsInfo>();
    const [year, setYear] = React.useState<number>();

    React.useEffect(() => {
        (async () => {
            const stats = await Stats.getSeasonLeaders();
            const weekYear = await Users.getUserTeams();
            if (stats) {
                setStats(stats);
            }
            if (weekYear) {
                setYear(weekYear.week_year.year);
            }
            setIsLoading(false);
        })();
    }, []);

    const statsPage = (
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
    );

    return isLoading ? <LoadingSpinner /> : statsPage;

}

export default StatsPage;
