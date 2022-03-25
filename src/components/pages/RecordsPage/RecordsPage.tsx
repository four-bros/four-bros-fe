import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { Records } from 'api';
import { 
    RecordsInfo
} from 'api/records';

import RecordsTable from './RecordsTable';
import style from './recordPage.module.scss'

const RecordsPage = (recordType: any, setRecordType: any) => {
    console.log(recordType, setRecordType);

    const isFirstRender = React.useRef(true);
    const [records, setRecords] = React.useState<RecordsInfo>();
    const [recordCategory, setRecordCategory] = React.useState('total');


    React.useEffect(() => {

        if (isFirstRender.current && recordType !== '') {
            (async () => {
                const response = await Records.getRecords(recordType.recordType);
                if (response) {
                    setRecords(response);
                }
            })();
            isFirstRender.current = false;
            return;
        } else {
            (async () => {
                const response = await Records.getRecords(recordType.recordType);
                if (response) {
                    setRecords(response);
                }
            })();
            isFirstRender.current = false;
            return;
        }
    }, [recordType]);


    return (
        <>
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

            {records && recordCategory === 'total' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='yards'
                        statCategory='total_stats'
                        fieldName='total_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='ypg'
                        statCategory='total_stats'
                        fieldName='total_ypg'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='tds'
                        statCategory='total_stats'
                        fieldName='total_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='turnovers'
                        statCategory='total_stats'
                        fieldName='turnovers'
                    />
                </>
            )}

            {records && recordCategory === 'passing' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_yards'
                        statCategory='passing_stats'
                        fieldName='pass_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_tds'
                        statCategory='passing_stats'
                        fieldName='pass_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_yp_game'
                        statCategory='passing_stats'
                        fieldName='pass_yp_game'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_att'
                        statCategory='passing_stats'
                        fieldName='pass_att'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_yp_attempt'
                        statCategory='passing_stats'
                        fieldName='pass_yp_attempt'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='completions'
                        statCategory='passing_stats'
                        fieldName='completions'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='longest_pass'
                        statCategory='passing_stats'
                        fieldName='longest_pass'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='interceptions'
                        statCategory='passing_stats'
                        fieldName='ints'
                    />
                </>
            )}

            {records && recordCategory === 'rushing' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rush_yards'
                        statCategory='rushing_stats'
                        fieldName='rush_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rush_yp_game'
                        statCategory='rushing_stats'
                        fieldName='rush_yp_game'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rush_yp_carry'
                        statCategory='rushing_stats'
                        fieldName='rush_yp_carry'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='broken_tackles'
                        statCategory='rushing_stats'
                        fieldName='broke_tkls'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rush_att'
                        statCategory='rushing_stats'
                        fieldName='rush_att'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='ya_contact'
                        statCategory='rushing_stats'
                        fieldName='ya_contact'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='twenty_plus_runs'
                        statCategory='rushing_stats'
                        fieldName='twenty_plus_yd_runs'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fumbles'
                        statCategory='rushing_stats'
                        fieldName='fumbles'
                    />
                </>
            )}

            {records && recordCategory === 'receiving' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='drops'
                        statCategory='receiving_stats'
                        fieldName='drops'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rec_tds'
                        statCategory='receiving_stats'
                        fieldName='rec_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rec_yards'
                        statCategory='receiving_stats'
                        fieldName='rec_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rec_yp_catch'
                        statCategory='receiving_stats'
                        fieldName='rec_yp_catch'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='rec_yp_game'
                        statCategory='receiving_stats'
                        fieldName='rec_yp_game'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='receptions'
                        statCategory='receiving_stats'
                        fieldName='receptions'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='yac'
                        statCategory='receiving_stats'
                        fieldName='yac'
                    />
                </>
            )}

            {records && recordCategory === 'defense' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='blocked_kicks'
                        statCategory='defensive_stats'
                        fieldName='blocked_kicks'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='def_tds'
                        statCategory='defensive_stats'
                        fieldName='def_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='forced_fumbles'
                        statCategory='defensive_stats'
                        fieldName='forced_fumbles'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fum_rec_yards'
                        statCategory='defensive_stats'
                        fieldName='fum_rec_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='int_ret_yards'
                        statCategory='defensive_stats'
                        fieldName='int_ret_yards'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='ints_made'
                        statCategory='defensive_stats'
                        fieldName='ints_made'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='long_int_ret'
                        statCategory='defensive_stats'
                        fieldName='long_int_ret'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pass_def'
                        statCategory='defensive_stats'
                        fieldName='pass_def'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='sacks'
                        statCategory='defensive_stats'
                        fieldName='sacks'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='safeties'
                        statCategory='defensive_stats'
                        fieldName='safeties'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='tfl'
                        statCategory='defensive_stats'
                        fieldName='tfl'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='total_sack'
                        statCategory='defensive_stats'
                        fieldName='total_sacks'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='total_tkls'
                        statCategory='defensive_stats'
                        fieldName='total_tkls'
                    />
                </>
            )}

            {records && recordCategory === 'kick_return' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='kr_tds'
                        statCategory='kick_return_stats'
                        fieldName='kr_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='kr_avg'
                        statCategory='kick_return_stats'
                        fieldName='kr_avg'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='long_kr'
                        statCategory='kick_return_stats'
                        fieldName='long_kr'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='kr_yards'
                        statCategory='kick_return_stats'
                        fieldName='kr_yds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='kick_returns'
                        statCategory='kick_return_stats'
                        fieldName='kick_returns'
                    />
                </>
            )}

            {records && recordCategory === 'punt_return' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pr_tds'
                        statCategory='punt_return_stats'
                        fieldName='pr_tds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pr_avg'
                        statCategory='punt_return_stats'
                        fieldName='pr_avg'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='long_pr'
                        statCategory='punt_return_stats'
                        fieldName='long_pr'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='pr_yards'
                        statCategory='punt_return_stats'
                        fieldName='pr_yds'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='punt_returns'
                        statCategory='punt_return_stats'
                        fieldName='punt_returns'
                    />
                </>
            )}

            {records && recordCategory === 'kicking' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='long_fg'
                        statCategory='kicking_stats'
                        fieldName='long_fg'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fg_pct'
                        statCategory='kicking_stats'
                        fieldName='fg_pct'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fg_made_50_plus'
                        statCategory='kicking_stats'
                        fieldName='fg_made_50_plus'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fg_made'
                        statCategory='kicking_stats'
                        fieldName='fg_made'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fg_made_50_plus_pct'
                        statCategory='kicking_stats'
                        fieldName='fg_50_plus_pct'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='fg_att'
                        statCategory='kicking_stats'
                        fieldName='fg_att'
                    />
                </>
            )}

            {records && recordCategory === 'punting' && (
                <>
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='long_punt'
                        statCategory='punting_stats'
                        fieldName='long_punt'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='punt_avg'
                        statCategory='punting_stats'
                        fieldName='punt_avg'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='inside_twenty'
                        statCategory='punting_stats'
                        fieldName='inside_twenty'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='net_punting'
                        statCategory='punting_stats'
                        fieldName='net_punting'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='number_punts'
                        statCategory='punting_stats'
                        fieldName='number_punts'
                    />
                    <RecordsTable 
                        recordInfo={records}
                        genCategory={recordCategory}
                        record='total_punt_yards'
                        statCategory='punting_stats'
                        fieldName='total_punt_yards'
                    />
                </>
            )}
            </div>
        </>
    );
};

export default RecordsPage;
