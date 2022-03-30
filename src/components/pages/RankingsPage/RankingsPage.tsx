import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { Rankings } from 'api';
import BcsTable from './BcsTable';
import RankingsTable from './RankingsTable';
import { RankingsInfo } from 'api/rankings';
import style from './rankingsPage.module.scss'


const RankingsPage = () => {

    const isFirstRender = React.useRef(true);
    const [rankings, setRankings] = React.useState<RankingsInfo>();
    const [pollType, setPollType] = React.useState('coachs_poll');

    React.useEffect(() => {
        (async () => {
            const response = await Rankings.getRankings();
            if (response) {
                setRankings(response)
            }
        })();
        isFirstRender.current = false;
        return;
    }, []);

    return (
        <div>
            <div className={style.headerContainer}>
                <h1 className={style.header}>Rankings</h1>
            </div>
            
            <div className={style.btnContainer}>
                <Button
                    name='coachs_poll'
                    active={pollType === 'coachs_poll'}
                    onClick={() => setPollType('coachs_poll')}
                >
                    Coach's Poll
                </Button>
                <Button
                    name='media_poll'
                    active={pollType === 'media_poll'}
                    onClick={() => setPollType('media_poll')}
                >
                    Media Poll
                </Button>
                <Button
                    name='bcs'
                    active={pollType === 'bcs'}
                    onClick={() => setPollType('bcs')}
                >
                    BCS
                </Button>
            </div>

            <div className={style.rankingsContainer}>
                {rankings && pollType === 'coachs_poll' && (
                    <RankingsTable 
                    poll={pollType}
                    rankingsArr={rankings[pollType]}
                    />
                )}

                {rankings && pollType === 'media_poll' && (
                    <RankingsTable 
                    poll={pollType}
                    rankingsArr={rankings[pollType]}
                    />
                )}

                {rankings && pollType === 'bcs' && (
                    <BcsTable 
                    poll={pollType}
                    rankingsArr={rankings[pollType]}
                    />
                )}
            </div>
        </div>
    )

}


export default RankingsPage;
