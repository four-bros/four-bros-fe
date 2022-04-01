import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Players } from 'api';
import { PlayerStatsStructure } from 'api/players';
import PlayerAbilities from './components/PlayerAbilities';
import PlayerDetails from './components/PlayerDetails';
import PlayerStats from './components/PlayerStats';


const PlayerPage = () => {
    const isFirstRender = React.useRef(true);
    const { playerId } = useParams();
    const [singlePlayer, setSinglePlayer] =
        React.useState<PlayerStatsStructure>();
    const [infoType, setInfoType] = React.useState('abilities');

    React.useEffect(() => {
        if (isFirstRender.current && playerId) {
            (async () => {
                const player = await Players.getPlayer(playerId);
                if (player) {
                    setSinglePlayer(player);
                }
            })();

            isFirstRender.current = false;
            return;
        }
    }, [playerId]);

    const handleClick = (value: string) => {
        setInfoType(value);
    };

    return (
        <div>

            <div className='page-container'>
                {singlePlayer && (
                    <div>
                        <>
                            <PlayerDetails player={singlePlayer} />

                            <hr />

                            <div className='buttonsContainer'>
                                <Button
                                    name='abilities'
                                    active={infoType === 'abilities'}
                                    onClick={() => handleClick('abilities')}
                                >
                                    Abilities
                                </Button>
                                <Button
                                    name='stats'
                                    active={infoType === 'stats'}
                                    onClick={() => handleClick('stats')}
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerPage;
