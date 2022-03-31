import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { Recruiting } from 'api';
import { CommitInfo } from 'api/recruiting';
import style from './recruitingPage.module.scss';
import RecruitingTable from './RecruitingTable';


const RecruitingPage = () => {

    const isFirstRender = React.useRef(true);
    const [recruitInfo, setRecruitInfo] = React.useState<CommitInfo>();
    const [school, setSchool] = React.useState('baylor');

    React.useEffect(() => {
        (async () => {
            const response = await Recruiting.getRecruits();
            if (response) {
                setRecruitInfo(response)
            }
        })();
        isFirstRender.current = false;
        return;
    }, []);


    return (
        <div>
            <div className={style.headerContainer}>
                <h1 className={style.header}>Recruiting</h1>
            </div>
            
            <div className={style.btnContainer}>
                <Button
                    name='baylor'
                    active={school === 'baylor'}
                    onClick={() => setSchool('baylor')}
                >
                    Baylor
                </Button>
                <Button
                    name='ole_miss'
                    active={school === 'ole_miss'}
                    onClick={() => setSchool('ole_miss')}
                >
                    Ole Miss
                </Button>
                <Button
                    name='vanderbilt'
                    active={school === 'vanderbilt'}
                    onClick={() => setSchool('vanderbilt')}
                >
                    Vanderbilt
                </Button>
                <Button
                    name='wyoming'
                    active={school === 'wyoming'}
                    onClick={() => setSchool('wyoming')}
                >
                    Wyoming
                </Button>
            </div>

            <div className={style.recruitingContainer}>
                {recruitInfo && school === 'baylor' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'ole_miss' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'vanderbilt' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'wyoming' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}
            </div>

        </div>
    )
}

export default RecruitingPage
