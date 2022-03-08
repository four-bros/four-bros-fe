import * as React from 'react';

import style from './playerOverview.module.scss'


const PlayerDetails = ({ player }) => {

    const getPlayerRedshirt = (player) => {

        if (player.details.redshirt) {
            return ' (Rs.)'
        } 
        else {
            return ''
        }
    }

    const playerYearAndRedShirt = `${player.details.player_year}. ${getPlayerRedshirt(player)}`

    return (
        <div className={style.playerOverview}>
            <div className={style.playerNameContainer}>
                <h3>#{player.details.jersey_number}</h3>
                <div className={style.playerName}>
                    <h2>{player.details.first_name} {player.details.last_name}</h2>
                </div>
                <h3>{player.details.team_name}</h3>
            </div>
            <div className={style.playerClassPosition}>
                <h3>{playerYearAndRedShirt}</h3>
                <h3>{player.details.position}</h3>
            </div>

        </div>
    )
}

export default PlayerDetails;
