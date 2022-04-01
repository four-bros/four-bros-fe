import { PlayerStatsStructure } from 'api/players';
import style from './playerOverview.module.scss';
import {getPlayerYearAndRedshirt} from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const PlayerDetails = ({ player }: Props) => {

    return (
        <div className={style.playerOverview}>
            <div className={style.playerNameContainer}>
                <h3>#{player.details.jersey_number}</h3>
                <div className={style.playerName}>
                    <h2>
                        {player.details.first_name} {player.details.last_name}
                    </h2>
                </div>
                <h3>{player.details.team_name}</h3>
            </div>
            <div className={style.playerClassPosition}>
                <h3>{getPlayerYearAndRedshirt(player.details)}</h3>
                <h3>{player.details.position}</h3>
            </div>
        </div>
    );
};

export default PlayerDetails;
