import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { Players } from 'api';

import { NavBar } from 'components/common';

import PlayerAbilities from './components/PlayerAbilities';
import PlayerDetails from './components/PlayerDetails';
import PlayerStats from './components/PlayerStats';
import { useParams } from 'react-router-dom';

const PlayerPage = () => {
    const isFirstRender = React.useRef(true);
    const { playerId } = useParams()
    const [singlePlayer, setSinglePlayer] = React.useState();
    const [infoType, setInfoType] = React.useState('abilities');

    React.useEffect(() => {
        if (isFirstRender.current) {
            (async () => {
                const player = await Players.getPlayer(playerId);
                setSinglePlayer(player);
            })();
            
            isFirstRender.current = false;
            return;
        }
    }, []);


    const handleClick = (value) => {
        setInfoType(value);
    };

    return (
        <div>
            <NavBar />
            
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
            <div className='page-container'>
                {singlePlayer && (
                    <div>
                        <>
                            <PlayerDetails
                                player={singlePlayer}
                            />

                            <hr/>

                            {infoType === 'abilities' && (
                                <PlayerAbilities 
                                    player={singlePlayer}
                                />
                            )}

                            {infoType === 'stats' && (
                                <PlayerStats 
                                    player={singlePlayer}
                                    infoType={infoType}
                                />
                            )}
                        </>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerPage;
