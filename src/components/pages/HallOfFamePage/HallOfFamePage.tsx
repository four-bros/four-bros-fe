import { PlayerHofStructure } from 'api/players';
import * as React from 'react';

import { Players } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import HofPlayerTable from './components/HofPlayerTable/HofPlayerTable';
import HofPlayerDetails from './components/HofPlayerDetails/HofPlayerDetails';
import globalStyle from '../../../styles/global.module.scss';
import style from './hallOfFamePage.module.scss';

const HallOfFamePage = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [hofPlayers, setHofPlayers] = React.useState<PlayerHofStructure[]>();

    React.useEffect(() => {
        (async () => {
            const players = await Players.getHofPlayers();
            if (players) {
                setHofPlayers(players);
                setIsLoading(false);
            }
        })();
    }, []);


    const HallOfFamePage = (
        <>
            <h1 className={globalStyle.pageHeader}>Hall of Fame</h1>
            {hofPlayers?.map((player) => {
                return (
                    <div className={style.container}>
                        <HofPlayerDetails playerAbilities={player.abilities} playerDetails={player.details} />
                        <HofPlayerTable
                            seasonStats={player.season_stats}
                            careerStats={player.career_stats}
                            playerPosition={player.details.position}
                        />
                    </div>
                )
            })}
        </>
    )


    return isLoading ? <LoadingSpinner /> : HallOfFamePage;
};


export default HallOfFamePage;
