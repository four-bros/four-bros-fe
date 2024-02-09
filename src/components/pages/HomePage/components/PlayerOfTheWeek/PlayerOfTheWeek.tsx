import * as React from 'react';
import { Players } from 'api';
import { IPlayerOfTheWeek } from 'interfaces/Player';
import style from './components/playerOfTheWeek.module.scss';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';
import PlayerOverview from './components/PlayerOverview';
import PlayerOfTheWeekTable from './components/PlayerOfTheWeekTable';

const PlayerOfTheWeek = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [playerOfTheWeek, setPlayerOfTheWeek] = React.useState<IPlayerOfTheWeek>();
    const [honorableMention, setHonorableMention] = React.useState<IPlayerOfTheWeek[]>([]);
    const mobile = useMediaQuery('(max-width: 767px)');

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await Players.getPlayerOfTheWeek();
            if (!response) throw new Error('unable to get team player stats');
            setPlayerOfTheWeek(response.player_of_the_week);
            setHonorableMention(response.honorable_mention);
            setIsLoading(false);
        })();
    }, []);

    const component = (
        <div className={style.container}>
            <h1 className={style.componentHeader}>Player of the Week</h1>
            {playerOfTheWeek && (
                <>
                    <PlayerOverview playerOfTheWeek={playerOfTheWeek} />
                    <PlayerOfTheWeekTable playerOfTheWeek={playerOfTheWeek} mobile={mobile} />
                </>
            )}

            <hr className={style.divider} />

            <h1 className={style.componentHeader}>Honorable Mention</h1>
            {honorableMention && (
                honorableMention.map(playerOfTheWeek => {
                    return (
                        <div className={style.honorableMention}>
                            <PlayerOverview playerOfTheWeek={playerOfTheWeek} />
                            <PlayerOfTheWeekTable playerOfTheWeek={playerOfTheWeek} mobile={mobile} />
                            <hr className={style.divider} />
                        </div>
                    )
                })
            )}
        </div>
    )

    return isLoading ? <LoadingSpinner /> : component;

}

export default PlayerOfTheWeek;