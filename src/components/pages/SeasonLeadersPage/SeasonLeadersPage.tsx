import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { Stats, Users } from 'api';
import { RecordsInfo} from 'api/records/playerRecords';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import PlayerRecordsTable from '../Records/PlayerRecordsPage/components/PlayerRecordsTable/PlayerRecordsTable';
import style from './seasonLeaders.module.scss';

const SeasonLeadersPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [seasonLeaders, setSeasonLeaders] = React.useState<RecordsInfo>();
    const [leaderCategory, setLeaderCategory] = React.useState('total');
    const [year, setYear] = React.useState<number>();

    React.useEffect(() => {
        (async () => {
            const stats = await Stats.getSeasonLeaders();
            const weekYear = await Users.getUserTeams();
            if (stats) {
                setSeasonLeaders(stats)
            }
            if (weekYear) {
                setYear(weekYear.week_year.year)
            }
            setIsLoading(false);
        })();
    }, []);

    const seasonLeadersPage = (
        <div>
            {year && (
                <div className={style.headerContainer}>
                    <h1>{year} Season Leaders</h1>
                </div>
            )}

            <div className={style.btnContainer}>
                <Button
                    name='total'
                    active={leaderCategory === 'total'}
                    onClick={() => setLeaderCategory('total')}
                >
                    Total
                </Button>
                <Button
                    name='passing'
                    active={leaderCategory === 'passing'}
                    onClick={() => setLeaderCategory('passing')}
                >
                    Passing
                </Button>
                <Button
                    name='rushing'
                    active={leaderCategory === 'rushing'}
                    onClick={() => setLeaderCategory('rushing')}
                >
                    Rushing
                </Button>
                <Button
                    name='receiving'
                    active={leaderCategory === 'receiving'}
                    onClick={() => setLeaderCategory('receiving')}
                >
                    Receiving
                </Button>
                <Button
                    name='defense'
                    active={leaderCategory === 'defense'}
                    onClick={() => setLeaderCategory('defense')}
                >
                    Defense
                </Button>
                <Button
                    name='kick_return'
                    active={leaderCategory === 'kick_return'}
                    onClick={() => setLeaderCategory('kick_return')}
                >
                    Kick Return
                </Button>
                <Button
                    name='punt_return'
                    active={leaderCategory === 'punt_return'}
                    onClick={() => setLeaderCategory('punt_return')}
                >
                    Punt Return
                </Button>
                <Button
                    name='kicking'
                    active={leaderCategory === 'kicking'}
                    onClick={() => setLeaderCategory('kicking')}
                >
                    Kicking
                </Button>
                <Button
                    name='punting'
                    active={leaderCategory === 'punting'}
                    onClick={() => setLeaderCategory('punting')}
                >
                    Punting
                </Button>
            </div>

            <div className={style.recordTableContainer}>

                {seasonLeaders && leaderCategory === 'total' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='yards'
                            statCategory='total_stats'
                            fieldName='total_yards'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='ypg'
                            statCategory='total_stats'
                            fieldName='total_ypg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='tds'
                            statCategory='total_stats'
                            fieldName='total_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='turnovers'
                            statCategory='total_stats'
                            fieldName='turnovers'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'passing' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_yards'
                            statCategory='passing_stats'
                            fieldName='pass_yards'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_tds'
                            statCategory='passing_stats'
                            fieldName='pass_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_ypg'
                            statCategory='passing_stats'
                            fieldName='pass_ypg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='comp_pct'
                            statCategory='passing_stats'
                            fieldName='comp_pct'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_att'
                            statCategory='passing_stats'
                            fieldName='pass_att'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_ypa'
                            statCategory='passing_stats'
                            fieldName='pass_ypa'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='completions'
                            statCategory='passing_stats'
                            fieldName='completions'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='longest_pass'
                            statCategory='passing_stats'
                            fieldName='longest_pass'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='interceptions'
                            statCategory='passing_stats'
                            fieldName='ints'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'rushing' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rush_yards'
                            statCategory='rushing_stats'
                            fieldName='rush_yards'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rush_tds'
                            statCategory='rushing_stats'
                            fieldName='rush_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rush_ypg'
                            statCategory='rushing_stats'
                            fieldName='rush_ypg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rush_ypc'
                            statCategory='rushing_stats'
                            fieldName='rush_ypc'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='broken_tackles'
                            statCategory='rushing_stats'
                            fieldName='broke_tkls'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rush_att'
                            statCategory='rushing_stats'
                            fieldName='rush_att'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='ya_contact'
                            statCategory='rushing_stats'
                            fieldName='ya_contact'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='twenty_plus_runs'
                            statCategory='rushing_stats'
                            fieldName='twenty_plus_yd_runs'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fumbles'
                            statCategory='rushing_stats'
                            fieldName='fumbles'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'receiving' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rec_yards'
                            statCategory='receiving_stats'
                            fieldName='rec_yards'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rec_tds'
                            statCategory='receiving_stats'
                            fieldName='rec_tds'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='receptions'
                            statCategory='receiving_stats'
                            fieldName='receptions'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rec_ypg'
                            statCategory='receiving_stats'
                            fieldName='rec_ypg'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='rec_ypc'
                            statCategory='receiving_stats'
                            fieldName='rec_ypc'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='yac'
                            statCategory='receiving_stats'
                            fieldName='yac'
                        />

                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='drops'
                            statCategory='receiving_stats'
                            fieldName='drops'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'defense' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='total_tkls'
                            statCategory='defensive_stats'
                            fieldName='total_tkls'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='total_sack'
                            statCategory='defensive_stats'
                            fieldName='total_sacks'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='tfl'
                            statCategory='defensive_stats'
                            fieldName='tfl'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='ints_made'
                            statCategory='defensive_stats'
                            fieldName='ints_made'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pass_def'
                            statCategory='defensive_stats'
                            fieldName='pass_def'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='long_int_ret'
                            statCategory='defensive_stats'
                            fieldName='long_int_ret'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='forced_fumbles'
                            statCategory='defensive_stats'
                            fieldName='forced_fumbles'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fumbles_rec'
                            statCategory='defensive_stats'
                            fieldName='fumbles_rec'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='def_tds'
                            statCategory='defensive_stats'
                            fieldName='def_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='blocked_kicks'
                            statCategory='defensive_stats'
                            fieldName='blocked_kicks'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='safeties'
                            statCategory='defensive_stats'
                            fieldName='safeties'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fum_rec_yards'
                            statCategory='defensive_stats'
                            fieldName='fum_rec_yards'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='int_ret_yards'
                            statCategory='defensive_stats'
                            fieldName='int_ret_yards'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'kick_return' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='kr_tds'
                            statCategory='kick_return_stats'
                            fieldName='kr_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='kr_avg'
                            statCategory='kick_return_stats'
                            fieldName='kr_avg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='long_kr'
                            statCategory='kick_return_stats'
                            fieldName='long_kr'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='kr_yards'
                            statCategory='kick_return_stats'
                            fieldName='kr_yds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='kick_returns'
                            statCategory='kick_return_stats'
                            fieldName='kick_returns'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'punt_return' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pr_tds'
                            statCategory='punt_return_stats'
                            fieldName='pr_tds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pr_avg'
                            statCategory='punt_return_stats'
                            fieldName='pr_avg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='long_pr'
                            statCategory='punt_return_stats'
                            fieldName='long_pr'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='pr_yards'
                            statCategory='punt_return_stats'
                            fieldName='pr_yds'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='punt_returns'
                            statCategory='punt_return_stats'
                            fieldName='punt_returns'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'kicking' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='long_fg'
                            statCategory='kicking_stats'
                            fieldName='long_fg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fg_pct'
                            statCategory='kicking_stats'
                            fieldName='fg_pct'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fg_made_50_plus'
                            statCategory='kicking_stats'
                            fieldName='fg_made_50_plus'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fg_made'
                            statCategory='kicking_stats'
                            fieldName='fg_made'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fg_made_50_plus_pct'
                            statCategory='kicking_stats'
                            fieldName='fg_50_plus_pct'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='fg_att'
                            statCategory='kicking_stats'
                            fieldName='fg_att'
                        />
                    </>
                )}

                {seasonLeaders && leaderCategory === 'punting' && (
                    <>
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='long_punt'
                            statCategory='punting_stats'
                            fieldName='long_punt'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='punt_avg'
                            statCategory='punting_stats'
                            fieldName='punt_avg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='net_avg'
                            statCategory='punting_stats'
                            fieldName='net_avg'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='inside_twenty'
                            statCategory='punting_stats'
                            fieldName='inside_twenty'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='number_punts'
                            statCategory='punting_stats'
                            fieldName='number_punts'
                        />
                        <PlayerRecordsTable 
                            recordInfo={seasonLeaders}
                            genCategory={leaderCategory}
                            record='total_punt_yards'
                            statCategory='punting_stats'
                            fieldName='total_punt_yards'
                        />
                    </>
                )}
            </div>
        </div>
    )


    return isLoading ? <LoadingSpinner /> : seasonLeadersPage;
};

export default SeasonLeadersPage;
