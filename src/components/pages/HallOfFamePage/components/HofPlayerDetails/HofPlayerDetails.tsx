import { Link } from 'react-router-dom';
import style from './hofPlayerDetails.module.scss';
import { Abilities, PlayerDetails } from 'interfaces/Player';


type Props = {
    playerAbilities: Abilities;
    playerDetails: PlayerDetails
}


const HofPlayerDetails = ({ playerAbilities, playerDetails }: Props) => {


    return (
        <div className={style.container}>
            <div className={style.playerContainer}>
                <Link
                    to={`/players/${playerDetails.id}`}
                    className={style.playerLink}
                >
                    {playerDetails.first_name} {playerDetails.last_name}
                </Link>
                <p className={style.text}>#{playerDetails.jersey_number}</p>
            </div>

            <div className={style.playerDetailsContainer}>
                <p className={style.text}>{playerDetails.team_name}</p>
                <p className={style.text}>{playerDetails.position}</p>
                <p className={style.text}>{playerDetails.height} / {playerDetails.weight}</p>
            </div>
        </div>
    )
}


export default HofPlayerDetails;