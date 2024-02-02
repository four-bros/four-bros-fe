import * as React from 'react';

import { Teams } from 'api';
import { TeamDetails, UserTeamsStats } from '../../../../../interfaces/Teams';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import style from './userTeamsStats.module.scss';
import UserTeamsStatsTable from './components/UserTeamsStatsTable';


const UserTeamsStatsPage = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [userTeamsDetails, setUserTeamsDetails] = React.useState<TeamDetails[]>()
    const [userTeamsStats, setUserTeamsStats] = React.useState<UserTeamsStats>()


    React.useEffect(() => {
        (async () => {
            const userTeamsDetails = await Teams.getUserTeamsDetails();
            const userTeamsStats = await Teams.getUserTeamsStats();
            if (userTeamsDetails) {
                setUserTeamsDetails(userTeamsDetails.data);
            }
            if (userTeamsStats) {
                setUserTeamsStats(userTeamsStats);
                setIsLoading(false);
            }
        })();
    }, []);


    const teamStatsTable = (
        <>
            <div className={style.tableContainer}>
                {userTeamsStats && userTeamsDetails && (
                    <UserTeamsStatsTable 
                        userTeamsStats={userTeamsStats}
                        userTeamDetails={userTeamsDetails}
                    />
                )}
            </div>
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamStatsTable;
}

export default UserTeamsStatsPage;
