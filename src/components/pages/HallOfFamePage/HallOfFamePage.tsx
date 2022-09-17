import { PlayerHofStructure } from 'api/players';
import * as React from 'react';

import { Players } from 'api';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import HofPlayerTable from './components/HofPlayerTable';

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

    console.log(hofPlayers);

    const HallOfFamePage = (
        <>
            {hofPlayers?.map((player) => {
                return (
                    <>
                        <p>{player.details.first_name} {player.details.last_name}</p>
                        <HofPlayerTable seasonStats={player.season_stats} careerStats={player.career_stats} />
                    </>
                )
            })}
        </>
    )


    return isLoading ? <LoadingSpinner /> : HallOfFamePage;
};


export default HallOfFamePage;
