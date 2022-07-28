import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Players } from 'api';
import { PlayerStatsStructure } from 'api/players';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import PlayerAbilities from './components/PlayerAbilities/PlayerAbilities';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import PlayerStats from './components/PlayerStats/PlayerStats';
import style from './playerPage.module.scss';


const PlayerPage = () => {

    const { playerId } = useParams();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [singlePlayer, setSinglePlayer] = React.useState<PlayerStatsStructure>();
    const [infoType, setInfoType] = React.useState('abilities');

    React.useEffect(() => {
        if (playerId) {
            (async () => {
                const player = await Players.getPlayer(playerId);
                if (player) {
                    setSinglePlayer(player);
                    setIsLoading(false);
                }
            })();
        }
    }, [playerId]);


    const playerPage = (
        <div className='page-container'>
            {singlePlayer && (
                <>
                    <PlayerDetails player={singlePlayer} />

                    <div className={style.btnContainer}>
                        <Button
                            name='abilities'
                            active={infoType === 'abilities'}
                            onClick={() => setInfoType('abilities')}
                        >
                            Abilities
                        </Button>
                        <Button
                            name='stats'
                            active={infoType === 'stats'}
                            onClick={() => setInfoType('stats')}
                        >
                            Stats
                        </Button>
                    </div>

                    <hr />

                    {infoType === 'abilities' && (
                        <PlayerAbilities player={singlePlayer} />
                    )}

                    {infoType === 'stats' && (
                        <PlayerStats player={singlePlayer} />
                    )}
                </>
            )}
        </div>
    );


    return isLoading ? <LoadingSpinner /> : playerPage;
};

export default PlayerPage;
