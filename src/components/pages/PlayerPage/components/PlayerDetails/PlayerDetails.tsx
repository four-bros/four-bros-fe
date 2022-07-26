import { LargeTable, TableContainer } from 'components/common';
import { PlayerStatsStructure } from 'api/players';
import style from './playerDetails.module.scss';
import {getPlayerYearAndRedshirt} from 'utils';

type Props = {
    player: PlayerStatsStructure;
};

const PlayerDetails = ({ player }: Props) => {

    const getPlayerDetails = (
        player: PlayerStatsStructure,
    ): [
        string[],
        (string | number)[],
        (string | number)[],
    ] => {
        return [
            ['Class', `${getPlayerYearAndRedshirt(player.details)}`],
            ['Height', player.details.height],
            ['Weight', player.details.weight],
        ];
    };

    return (
        <div className={style.playerContainer}>
            <div className={style.playerNameContainer}>
                <h3>#{player.details.jersey_number}</h3>
                <h2>{player.details.first_name} {player.details.last_name}</h2>
                <h3>{player.details.position}</h3>
            </div>
            <div className={style.playerSummary}>
                <TableContainer title={player.details.team_name} small>
                    <LargeTable contents={getPlayerDetails(player)} />
                </TableContainer>
            </div>
        </div>
    );
};

export default PlayerDetails;
