import { LargeTable, TableContainer } from 'components/common';
import { Team, TeamDetails, TeamStats } from 'api/teams';
import style from './teamOverview.module.scss';
import {
    getOverviewInfo,
    getDefenseOverview,
    getOffenseOverview,
} from '../tableTransform';


type Props = {
    simplifiedTeam: Team;
    overview: TeamDetails;
    overallStats: TeamStats;
    infoType: string;
};

const TeamOverview = ({
    simplifiedTeam,
    overview,
    overallStats,
    infoType,
}: Props) => {

    return (
        <div className={style.teamOverview}>
            {/* 1st section */}
            <div className={style.teamName}>
                <h3>#{simplifiedTeam.coachs_poll_rank}</h3>
                <h2>
                    {simplifiedTeam.team_name} {simplifiedTeam.nickname}
                </h2>
            </div>
            {/* 2nd section */}
            {infoType === 'overview' && (
                <>
                    <div className={style.teamSummary}>
                        <TableContainer title='Overview' small>
                            <LargeTable
                                contents={getOverviewInfo(
                                    overview,
                                    simplifiedTeam
                                )}
                            />
                        </TableContainer>
                    </div>
                    {/* 3rd section */}
                    <div className={style.teamStatsContainer}>
                        <TableContainer title='Offense' small>
                            <LargeTable contents={getOffenseOverview(overallStats)} />
                        </TableContainer>
                        <TableContainer title='Defense' small>
                            <LargeTable contents={getDefenseOverview(overallStats)} />
                        </TableContainer>
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamOverview;
