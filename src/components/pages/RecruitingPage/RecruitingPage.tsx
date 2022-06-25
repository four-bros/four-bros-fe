import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { Recruiting } from 'api';
import { CommitInfo } from 'api/recruiting';
import style from './recruitingPage.module.scss';
import RecruitingTable from './RecruitingTable';
import { getTableHeader } from 'utils';


const RecruitingPage = () => {

    const isFirstRender = React.useRef(true);
    const [recruitInfo, setRecruitInfo] = React.useState<CommitInfo>();
    
    const ben: string = 'oklahoma_state'
    const brent: string = 'syracuse'
    const dan: string = 'usc'
    const seth: string = 'northwestern'

    const [school, setSchool] = React.useState<string>(ben);

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
                    name={ben}
                    active={school === ben}
                    onClick={() => setSchool(ben)}
                >
                    {getTableHeader(ben)}
                </Button>
                <Button
                    name={seth}
                    active={school === seth}
                    onClick={() => setSchool(seth)}
                >
                    {getTableHeader(seth)}
                </Button>
                <Button
                    name={brent}
                    active={school === brent}
                    onClick={() => setSchool(brent)}
                >
                    {getTableHeader(brent)}
                </Button>
                <Button
                    name={dan}
                    active={school === dan}
                    onClick={() => setSchool(dan)}
                >
                    {getTableHeader(dan)}
                </Button>
            </div>

            <div className={style.recruitingContainer}>
                {recruitInfo && school === ben && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === seth && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === brent && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}

                {recruitInfo && school === dan && (
                    <RecruitingTable 
                    commitsArr={recruitInfo[school]}
                    />
                )}
            </div>

        </div>
    )
}

export default RecruitingPage
