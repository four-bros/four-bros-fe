import * as React from 'react';
import { Button } from 'semantic-ui-react';

import { Rankings } from 'api';
import BcsTable from './components/BcsTable/BcsTable';
import RankingsTable from './components/RankingsTable/RankingsTable';
import { RankingsInfo } from 'api/rankings';
import style from './rankingsPage.module.scss'
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';


const RankingsPage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [rankings, setRankings] = React.useState<RankingsInfo>();
    const [pollType, setPollType] = React.useState('coachs_poll');

    React.useEffect(() => {
        (async () => {
            const response = await Rankings.getRankings();
            if (response) {
                setRankings(response);
                setIsLoading(false);
            }
        })();
    }, []);

    const rankingsPage = (
        <div>
            <div className={style.headerContainer}>
                <h1>Rankings</h1>
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
    );

    return isLoading ? <LoadingSpinner /> : rankingsPage;

}


export default RankingsPage;
