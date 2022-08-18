import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { PlayerRecords } from 'api';
import { RecordsInfo} from 'api/records/playerRecords';
import PlayerRecordsTable from './components/PlayerRecordsTable/PlayerRecordsTable';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import style from './playerRecords.module.scss';
import { useParams } from 'react-router-dom';


const PlayerRecordsPage = () => {

    const { recordType, recordGroup } = useParams();
    const [playerRecords, setPlayerRecords] = React.useState<RecordsInfo>();
    const [recordCategory, setRecordCategory] = React.useState('total');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const recordHeader = recordType?.toString();
    let header: string;

    if (recordHeader) {
        const recordHeaderUpper = recordHeader.charAt(0).toUpperCase();
        const recordHeaderLower = recordHeader.slice(1);
        header = recordHeaderUpper + recordHeaderLower + ' Records';
    } else {
        header = ''
    }

    React.useEffect(() => {

        if (recordType) {
            (async () => {
                setIsLoading(true);
                const response = await PlayerRecords.getRecords(`${recordType}`, `${recordGroup}`);
                if (response) {
                    setPlayerRecords(response);
                    setIsLoading(false);
                }
            })();
        } 
    }, [recordType, recordGroup]);

    const recordsPage = (
        <>
        <div className={style.headerContainer}>
            <h1>{header}</h1>
        </div>

        <div className={style.btnContainer}>
            <Button
                name='total'
                active={recordCategory === 'total'}
                onClick={() => setRecordCategory('total')}
            >
                Total
            </Button>
            <Button
                name='passing'
                active={recordCategory === 'passing'}
                onClick={() => setRecordCategory('passing')}
            >
                Passing
            </Button>
            <Button
                name='rushing'
                active={recordCategory === 'rushing'}
                onClick={() => setRecordCategory('rushing')}
            >
                Rushing
            </Button>
            <Button
                name='receiving'
                active={recordCategory === 'receiving'}
                onClick={() => setRecordCategory('receiving')}
            >
                Receiving
            </Button>
            <Button
                name='defense'
                active={recordCategory === 'defense'}
                onClick={() => setRecordCategory('defense')}
            >
                Defense
            </Button>
            <Button
                name='kick_return'
                active={recordCategory === 'kick_return'}
                onClick={() => setRecordCategory('kick_return')}
            >
                Kick Return
            </Button>
            <Button
                name='punt_return'
                active={recordCategory === 'punt_return'}
                onClick={() => setRecordCategory('punt_return')}
            >
                Punt Return
            </Button>
            <Button
                name='kicking'
                active={recordCategory === 'kicking'}
                onClick={() => setRecordCategory('kicking')}
            >
                Kicking
            </Button>
            <Button
                name='punting'
                active={recordCategory === 'punting'}
                onClick={() => setRecordCategory('punting')}
            >
                Punting
            </Button>
        </div>

        <div className={style.recordTableContainer}>
        {playerRecords && recordCategory === 'total' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='yards'
                    statCategory='total_stats'
                    fieldName='total_yards'
                />
                {recordHeader !== 'game' && (
                  <PlayerRecordsTable 
                      recordInfo={playerRecords}
                      genCategory={recordCategory}
                      record='ypg'
                      statCategory='total_stats'
                      fieldName='total_ypg'
                  />
                )}
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='tds'
                    statCategory='total_stats'
                    fieldName='total_tds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='turnovers'
                    statCategory='total_stats'
                    fieldName='turnovers'
                />
            </>
        )}

        {playerRecords && recordCategory === 'passing' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pass_rating'
                    statCategory='passing_stats'
                    fieldName='pass_rating'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pass_yards'
                    statCategory='passing_stats'
                    fieldName='pass_yards'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pass_tds'
                    statCategory='passing_stats'
                    fieldName='pass_tds'
                />
                {recordHeader !== 'game' && (
                    <PlayerRecordsTable 
                        recordInfo={playerRecords}
                        genCategory={recordCategory}
                        record='pass_ypg'
                        statCategory='passing_stats'
                        fieldName='pass_ypg'
                    />
                )}
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pass_ypa'
                    statCategory='passing_stats'
                    fieldName='pass_ypa'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='comp_pct'
                    statCategory='passing_stats'
                    fieldName='comp_pct'
                />

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='completions'
                    statCategory='passing_stats'
                    fieldName='completions'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='longest_pass'
                    statCategory='passing_stats'
                    fieldName='longest_pass'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='interceptions'
                    statCategory='passing_stats'
                    fieldName='ints'
                />
            </>
        )}

        {playerRecords && recordCategory === 'rushing' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rush_yards'
                    statCategory='rushing_stats'
                    fieldName='rush_yards'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record={recordHeader === 'career' ? 'tds' : 'rush_tds'}
                    statCategory='rushing_stats'
                    fieldName='rush_tds'
                />
                {recordHeader !== 'game' && (
                  <PlayerRecordsTable 
                      recordInfo={playerRecords}
                      genCategory={recordCategory}
                      record='rush_ypg'
                      statCategory='rushing_stats'
                      fieldName='rush_ypg'
                  />
                )}
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rush_ypc'
                    statCategory='rushing_stats'
                    fieldName='rush_ypc'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='broken_tackles'
                    statCategory='rushing_stats'
                    fieldName='broke_tkls'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rush_att'
                    statCategory='rushing_stats'
                    fieldName='rush_att'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='ya_contact'
                    statCategory='rushing_stats'
                    fieldName='ya_contact'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='twenty_plus_runs'
                    statCategory='rushing_stats'
                    fieldName='twenty_plus_yd_runs'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fumbles'
                    statCategory='rushing_stats'
                    fieldName='fumbles'
                />
            </>
        )}

        {playerRecords && recordCategory === 'receiving' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rec_yards'
                    statCategory='receiving_stats'
                    fieldName='rec_yards'
                />

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rec_tds'
                    statCategory='receiving_stats'
                    fieldName='rec_tds'
                />

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='receptions'
                    statCategory='receiving_stats'
                    fieldName='receptions'
                />
                {recordHeader !== 'game' && (
                  <PlayerRecordsTable 
                      recordInfo={playerRecords}
                      genCategory={recordCategory}
                      record='rec_ypg'
                      statCategory='receiving_stats'
                      fieldName='rec_ypg'
                  />
                )}

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='rec_ypc'
                    statCategory='receiving_stats'
                    fieldName='rec_ypc'
                />

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='yac'
                    statCategory='receiving_stats'
                    fieldName='yac'
                />

                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='drops'
                    statCategory='receiving_stats'
                    fieldName='drops'
                />
            </>
        )}

        {playerRecords && recordCategory === 'defense' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='total_tkls'
                    statCategory='defensive_stats'
                    fieldName='total_tkls'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='sacks'
                    statCategory='defensive_stats'
                    fieldName='sacks'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='tfl'
                    statCategory='defensive_stats'
                    fieldName='tfl'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='ints_made'
                    statCategory='defensive_stats'
                    fieldName='ints_made'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pass_def'
                    statCategory='defensive_stats'
                    fieldName='pass_def'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='long_int_ret'
                    statCategory='defensive_stats'
                    fieldName='long_int_ret'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='forced_fumbles'
                    statCategory='defensive_stats'
                    fieldName='forced_fumbles'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fumbles_rec'
                    statCategory='defensive_stats'
                    fieldName='fumbles_rec'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='def_tds'
                    statCategory='defensive_stats'
                    fieldName='def_tds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='blocked_kicks'
                    statCategory='defensive_stats'
                    fieldName='blocked_kicks'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='safeties'
                    statCategory='defensive_stats'
                    fieldName='safeties'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fum_rec_yards'
                    statCategory='defensive_stats'
                    fieldName='fum_rec_yards'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='int_ret_yards'
                    statCategory='defensive_stats'
                    fieldName='int_ret_yards'
                />
            </>
        )}

        {playerRecords && recordCategory === 'kick_return' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='kr_tds'
                    statCategory='kick_return_stats'
                    fieldName='kr_tds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='kr_avg'
                    statCategory='kick_return_stats'
                    fieldName='kr_avg'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='long_kr'
                    statCategory='kick_return_stats'
                    fieldName='long_kr'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='kr_yards'
                    statCategory='kick_return_stats'
                    fieldName='kr_yds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='kick_returns'
                    statCategory='kick_return_stats'
                    fieldName='kick_returns'
                />
            </>
        )}

        {playerRecords && recordCategory === 'punt_return' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pr_tds'
                    statCategory='punt_return_stats'
                    fieldName='pr_tds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pr_avg'
                    statCategory='punt_return_stats'
                    fieldName='pr_avg'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='long_pr'
                    statCategory='punt_return_stats'
                    fieldName='long_pr'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='pr_yards'
                    statCategory='punt_return_stats'
                    fieldName='pr_yds'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='punt_returns'
                    statCategory='punt_return_stats'
                    fieldName='punt_returns'
                />
            </>
        )}

        {playerRecords && recordCategory === 'kicking' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='long_fg'
                    statCategory='kicking_stats'
                    fieldName='long_fg'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fg_pct'
                    statCategory='kicking_stats'
                    fieldName='fg_pct'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fg_made_50_plus'
                    statCategory='kicking_stats'
                    fieldName='fg_made_50_plus'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fg_made'
                    statCategory='kicking_stats'
                    fieldName='fg_made'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fg_made_50_plus_pct'
                    statCategory='kicking_stats'
                    fieldName='fg_50_plus_pct'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='fg_att'
                    statCategory='kicking_stats'
                    fieldName='fg_att'
                />
            </>
        )}

        {playerRecords && recordCategory === 'punting' && (
            <>
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='long_punt'
                    statCategory='punting_stats'
                    fieldName='long_punt'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='punt_avg'
                    statCategory='punting_stats'
                    fieldName='punt_avg'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='net_avg'
                    statCategory='punting_stats'
                    fieldName='net_avg'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='inside_twenty'
                    statCategory='punting_stats'
                    fieldName='inside_twenty'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='number_punts'
                    statCategory='punting_stats'
                    fieldName='number_punts'
                />
                <PlayerRecordsTable 
                    recordInfo={playerRecords}
                    genCategory={recordCategory}
                    record='total_punt_yards'
                    statCategory='punting_stats'
                    fieldName='total_punt_yards'
                />
            </>
        )}
        </div>
    </>
    )

    return isLoading ? <LoadingSpinner /> : recordsPage;

};

export default PlayerRecordsPage;
