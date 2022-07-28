import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { CoachRecords } from 'api';
import { CoachRecordsData } from 'api/records/coachRecords';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import CoachRecordsTable from './components/CoachRecordsTable/CoachRecordsTable';
import style from './coachRecords.module.scss';


const CoachRecordsPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [coachRecords, setCoachRecords] = React.useState<CoachRecordsData | void>()
    const [coach, setCoach] = React.useState<string>('ben')

    React.useEffect(() => {
        (async () => {
            const response = await CoachRecords.getCoachRecords();
            if (response) {
                setCoachRecords(response)
                setIsLoading(false);
            }
        })();
    }, []);

    const coachRecordsPage = (
        <div>
            <div className={style.headerContainer}>
                <h1>Coaching Records</h1>
            </div>

            <div className={style.btnContainer}>
                <Button
                    name='ben'
                    active={coach === 'ben'}
                    onClick={() => setCoach('ben')}
                >
                    {coachRecords?.ben.name}
                </Button>
                <Button
                    name='brent'
                    active={coach === 'brent'}
                    onClick={() => setCoach('brent')}
                >
                    {coachRecords?.brent.name}
                </Button>
                <Button
                    name='dan'
                    active={coach === 'dan'}
                    onClick={() => setCoach('dan')}
                >
                    {coachRecords?.dan.name}
                </Button>
                <Button
                    name='seth'
                    active={coach === 'seth'}
                    onClick={() => setCoach('seth')}
                >
                    {coachRecords?.seth.name}
                </Button>
            </div>
            {coachRecords && coach === 'ben' && (
                <CoachRecordsTable coachData={coachRecords.ben} />
            )}

            {coachRecords && coach === 'brent' && (
                <CoachRecordsTable coachData={coachRecords.brent} />
            )}

            {coachRecords && coach === 'dan' && (
                <CoachRecordsTable coachData={coachRecords.dan} />
            )}

            {coachRecords && coach === 'seth' && (
                <CoachRecordsTable coachData={coachRecords.seth} />
            )}
        </div>
    );


    return isLoading ? <LoadingSpinner /> : coachRecordsPage;
}

export default CoachRecordsPage;
