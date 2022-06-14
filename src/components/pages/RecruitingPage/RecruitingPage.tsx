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
                    name='ecu'
                    active={school === 'ecu'}
                    onClick={() => setSchool('ecu')}
                >
                    ECU
                </Button>
                <Button
                    name='florida_atlantic'
                    active={school === 'florida_atlantic'}
                    onClick={() => setSchool('florida_atlantic')}
                >
                    Florida Atlantic
                </Button>
                <Button
                    name='syracuse'
                    active={school === 'syracuse'}
                    onClick={() => setSchool('syracuse')}
                >
                    Syracuse
                </Button>
                <Button
                    name='umass'
                    active={school === 'umass'}
                    onClick={() => setSchool('umass')}
                >
                    Umass
                </Button>
            </div>

            <div className={style.recruitingContainer}>
                {recruitInfo && school === 'ecu' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'florida_atlantic' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'syracuse' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === 'umass' && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}
            </div>

        </div>
    )
}

export default RecruitingPage
