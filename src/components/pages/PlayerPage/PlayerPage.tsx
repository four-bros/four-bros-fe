import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Players } from 'api';
import { PlayerStatsStructure } from 'api/players';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import AbilitiesDropDown from './components/DropDowns/AbilitiesDropDown';
import StatsDropDown from './components/DropDowns/StatsDropDown';
import PlayerAbilities from './components/PlayerAbilities/PlayerAbilities';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import PlayerStats from './components/PlayerStats/PlayerStats';
import style from './playerPage.module.scss';


const PlayerPage = () => {

    const { playerId } = useParams();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [singlePlayer, setSinglePlayer] = React.useState<PlayerStatsStructure>();
    const [infoType, setInfoType] = React.useState('abilities');
    const [abilityType, setAbilityType] = React.useState('athletic');
    const [statsType, setStatsType] = React.useState('season');


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
                        <AbilitiesDropDown setInfoType={setInfoType} setAbilityType={setAbilityType} />
                        <StatsDropDown setInfoType={setInfoType} setStatsType={setStatsType}  />
                    </div>

                    {infoType === 'abilities' && (
                        <PlayerAbilities player={singlePlayer} abilityType={abilityType} />
                    )}

                    {infoType === 'stats' && (
                        <PlayerStats player={singlePlayer} statsType={statsType} />
                    )}
                </>
            )}
        </div>
    );

    return isLoading ? <LoadingSpinner /> : playerPage;
};

export default PlayerPage;
