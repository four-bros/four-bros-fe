import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { TeamRecords } from 'api';
import { TeamSeasonRecordData } from '../../../../../interfaces/Teams';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import style from '../../TeamRecords/teamRecords.module.scss';
import TeamRecordsTable from '../components/TeamRecordsTable/TeamRecordsTable';


const TeamSeasonRecordsPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [teamRecords, setTeamRecords] = React.useState<TeamSeasonRecordData | void>()
    const [recordCategory, setRecordCategory] = React.useState<string>('offense');


    React.useEffect(() => {
        (async () => {
            const response = await TeamRecords.getTeamSeasonRecords();
            if (response) {
                setTeamRecords(response);
                setIsLoading(false);
            }
        })();
    }, []);


    const teamRecordsPage = (
        <>
            <div className={style.headerContainer}>
                <h1>Team Season Records</h1>
            </div>
            <div className={style.btnContainer}>
                <Button
                    name='offense'
                    active={recordCategory === 'offense'}
                    onClick={() => setRecordCategory('offense')}
                >
                    Offense
                </Button>
                <Button
                    name='defense'
                    active={recordCategory === 'defense'}
                    onClick={() => setRecordCategory('defense')}
                >
                    Defense
                </Button>
                <Button
                    name='special_teams'
                    active={recordCategory === 'special_teams'}
                    onClick={() => setRecordCategory('special_teams')}
                >
                    Special Teams
                </Button>
            </div>
            <div className={style.tableContainer}>
                <>
                    {teamRecords && recordCategory === 'offense' && (
                        <>
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='points'
                                fieldName='total_points'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='ppg'
                                fieldName='ppg'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='total_yards'
                                fieldName='total_yards'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='total_ypg'
                                fieldName='total_ypg'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='off_yards'
                                fieldName='off_yards'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='off_ypg'
                                fieldName='off_ypg'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='pass_yards'
                                fieldName='pass_yds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='pass_tds'
                                fieldName='pass_tds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='ints'
                                fieldName='ints'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='rush_yards'
                                fieldName='rush_yds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='rush_tds'
                                fieldName='rush_tds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='fumbles'
                                fieldName='fumbles'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='drops'
                                fieldName='drops'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='turnovers'
                                fieldName='off_turnovers'
                            />
                        </>
                    )}

                    {teamRecords && recordCategory === 'defense' && (
                        <>
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='sacks'
                                fieldName='sacks'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='tfl'
                                fieldName='tfl'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='turnovers'
                                fieldName='def_turnovers'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='ints_made'
                                fieldName='ints_made'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='ff'
                                fieldName='ff'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='fr'
                                fieldName='fr'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='to_margin'
                                fieldName='to_margin'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='pass_def'
                                fieldName='pass_def'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='safeties'
                                fieldName='safeties'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='def_td'
                                fieldName='def_tds'
                            />
                        </>
                    )}

                    {teamRecords && recordCategory === 'special_teams' && (
                        <>
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='kr_tds'
                                fieldName='kr_tds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='kr_yds'
                                fieldName='kr_yds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='pr_tds'
                                fieldName='pr_tds'
                            />
                            <TeamRecordsTable
                                recordData={teamRecords}
                                recordCategory={recordCategory}
                                record='pr_yds'
                                fieldName='pr_yds'
                            />
                        </>
                    )}
                </>
            </div>
        </>
    );

    return isLoading ? <LoadingSpinner /> : teamRecordsPage;
}

export default TeamSeasonRecordsPage;
