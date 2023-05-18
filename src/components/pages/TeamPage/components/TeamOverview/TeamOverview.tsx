import * as React from 'react';
import { LargeTable, TableContainer } from 'components/common';
import { TeamDetails, TeamStats } from 'api/teams';
import style from './teamOverview.module.scss';
import {
    getOverviewInfo,
    getDefenseOverview,
    getOffenseOverview,
} from '../tableTransform';
import { Teams } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';


type Props = {
    infoType: string;
    teamId: string;
    teamDetails: TeamDetails;
};

const TeamOverview = ({
    infoType,
    teamId,
    teamDetails
}: Props) => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamStats, setTeamStats] = React.useState<TeamStats>();

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const teamStats = await Teams.getTeamStats(teamId)
            if (!teamStats) throw new Error('unable to get team stats');
            setTeamStats(teamStats);
            setIsLoading(false);
        })();
    }, [teamId]);

    const teamOverview = (
        <div className={style.teamOverview}>
            {teamDetails && infoType === 'overview' && (
                <>
                {/* 1st section */}
                    <div className={style.teamName}>
                        <h3>#{teamDetails.coachs_poll_rank}</h3>
                        <h2>
                            {teamDetails.team_name} {teamDetails.nickname}
                        </h2>
                    </div>
                    {/* 2nd section */}
                    <div className={style.teamSummary}>
                        <TableContainer title='Overview' small>
                            <LargeTable contents={getOverviewInfo(teamDetails)}/>
                        </TableContainer>
                    </div>
                    {/* 3rd section */}
                    {teamStats && teamStats.games_played > 0 &&
                        (<div className={style.teamStatsContainer}>
                            <TableContainer title='Offense' small>
                                <LargeTable contents={getOffenseOverview(teamStats)} />
                            </TableContainer>
                            <TableContainer title='Defense' small>
                                <LargeTable contents={getDefenseOverview(teamStats)} />
                            </TableContainer>
                        </div>)
                    }
                </>
            )}
        </div>
    );

    return isLoading ? <LoadingSpinner /> : teamOverview;
};

export default TeamOverview;
