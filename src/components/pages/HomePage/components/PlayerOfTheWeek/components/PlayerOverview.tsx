import { Link } from 'react-router-dom';
import { IPlayerOfTheWeek } from '../../../../../../interfaces/Player';
import style from './playerOfTheWeek.module.scss'

type Props = {
    playerOfTheWeek: IPlayerOfTheWeek;
}

const PlayerOverview = ({ playerOfTheWeek }: Props) => {

    return (
        <div className={style.playerOverview}>
            <div className={style.playerDetails}>
                <Link to={`/players/${playerOfTheWeek?.player.details.id}`} className={style.playerName}>{playerOfTheWeek?.player.details.first_name} {playerOfTheWeek?.player.details.last_name}</Link>
                <Link to={`/team/${playerOfTheWeek?.player.details.team_id}`} className={style.teamName}>{playerOfTheWeek?.player.details.team_name}</Link>
                <p>{playerOfTheWeek?.player.details.position}  #{playerOfTheWeek?.player.details.jersey_number}</p>
            </div>
            <div className={style.playerTotals}>
                <div className={style.category}>
                    <p className={style.playerStat}>{playerOfTheWeek?.player.game_stats.total.total_yards}</p>
                    <p>Total Yards</p>
                </div>
                <div className={style.category}>
                    <p className={style.playerStat}>{playerOfTheWeek?.player.game_stats.total.total_tds}</p>
                    <p>TDs</p>
                </div>
                <div className={style.category}>
                    <p className={style.playerStat}>{playerOfTheWeek?.player.game_stats.total.turnovers}</p>
                    <p>Turnovers</p>
                </div>
                <div className={style.category}>
                    <p className={style.playerStat}>{playerOfTheWeek?.game_points}</p>
                    <p>Game Points</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerOverview;
