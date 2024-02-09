import * as React from 'react';
import { TeamDetails, TeamStats } from '../../../../../interfaces/Teams';
import style from './teamOverview.module.scss';
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
                    <div className={style.teamNameAndRatingContainer}>
                        <div className={style.teamName}>
                            <h3 className={style.teamNameChild}>#{teamDetails.coachs_poll_rank}</h3>
                            <h1 className={style.teamNameChild}>{teamDetails.team_name} {teamDetails.nickname}</h1>
                            <h3 className={style.teamNameChild}>{teamDetails.wins} - {teamDetails.losses}</h3>
                        </div>
                        <div className={style.teamRatings}>
                            <div className={style.ratingCategory}>
                                <p className={style.rating}>{teamDetails.avg_overall}</p>
                                <p>Overall</p>
                            </div>
                            <div className={style.ratingCategory}>
                                <p className={style.rating}>{teamDetails.avg_offense}</p>
                                <p>Offense</p>
                            </div>
                            <div className={style.ratingCategory}>
                                <p className={style.rating}>{teamDetails.avg_defense}</p>
                                <p>Defense</p>
                            </div>
                            <div className={style.ratingCategory}>
                                <p className={style.rating}>{teamDetails.avg_sp_teams}</p>
                                <p>Special Teams</p>
                            </div>
                        </div>
                    </div>
                    {teamStats && teamStats?.games_played > 0 && (
                        <div className={style.teamStatsContainer}>
                            <div className={style.teamStats}>
                                <h2>Offense</h2>
                                <hr />
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.ppg}</p>
                                    <p>PPG</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.off_ypg}</p>
                                    <p>Off YPG</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.pass_ypg}</p>
                                    <p>Pass YPG</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.pass_ypg}</p>
                                    <p>Rush YPG</p>
                                </div>
                            </div>
                            <div className={style.teamStats}>
                                <h2>Defense</h2>
                                <hr />
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.def_turnovers}</p>
                                    <p>TOs</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.ints}</p>
                                    <p>INTs</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.fumbles}</p>
                                    <p>Fumbles</p>
                                </div>
                                <div className={style.statCategory}>
                                    <p className={style.stat}>{teamStats.sacks}</p>
                                    <p>Sacks</p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );

    return isLoading ? <LoadingSpinner /> : teamOverview;
};

export default TeamOverview;
