import { Link } from 'react-router-dom';

// Passing Table
const passingHeaders = [
    'Name',
    'Completions',
    'Attempts',
    'Yards',
    'YPG',
    'TDs',
    'INTs',
];

const getPassingInfo = (passingLeaders) => {
    let renderedInfo = [];

    passingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.passing_stats.completions,
            leader.passing_stats.pass_att,
            leader.passing_stats.pass_yards,
            leader.passing_stats.pass_yp_game,
            leader.passing_stats.pass_tds,
            leader.passing_stats.ints,
        ]);
    });
    return renderedInfo;
};

// Rushing Table
const rushingHeaders = ['Name', 'Attempts', 'Yards', 'YPG', 'TDs', 'Fumbles'];

const getRushingInfo = (rushingLeaders) => {
    let renderedInfo = [];

    rushingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.rushing_stats.rush_att,
            leader.rushing_stats.rush_yards,
            leader.rushing_stats.rush_yp_game,
            leader.rushing_stats.rush_tds,
            leader.rushing_stats.fumbles,
        ]);
    });
    return renderedInfo;
};

const receivingHeaders = ['Name', 'Catches', 'Yards', 'TDs', 'Drops'];

const getReceivingInfo = (receivingLeaders) => {
    let renderedInfo = [];

    receivingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.receiving_stats.receptions,
            leader.receiving_stats.rec_yards,
            leader.receiving_stats.rec_tds,
            leader.receiving_stats.drops,
        ]);
    });

    return renderedInfo;
};

const defendingHeaders = [
    'Name',
    'Tackles',
    'TFL',
    'Sacks',
    'Pass Def.',
    'INTs',
    'FF',
    'FR',
    'TDs',
];

const getDefendingInfo = (defendingLeaders) => {
    let renderedInfo = [];

    defendingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.defensive_stats.total_tkls,
            leader.defensive_stats.tfl,
            leader.defensive_stats.sacks,
            leader.defensive_stats.pass_def,
            leader.defensive_stats.ints_made,
            leader.defensive_stats.forced_fumbles,
            leader.defensive_stats.fumbles_rec,
            leader.defensive_stats.def_tds,
        ]);
    });

    return renderedInfo;
};

const rosterHeaders = [
    'Name',
    'Class',
    'Ht/Wt',
    'Number',
    'Position',
    'Overall',
];

const getRosterInfo = (roster) => {
    let renderedInfo = [];

    roster.map((player) => {
        return renderedInfo.push([
            <Link to={`/players/${player.id}`}>
                {player.first_name} {player.last_name}
            </Link>,
            player.player_year,
            `${player.height} / ${player.weight}`,
            player.jersey_number,
            player.position,
            player.overall,
        ]);
    });

    return renderedInfo;
};

export {
    passingHeaders,
    getPassingInfo,
    rushingHeaders,
    getRushingInfo,
    receivingHeaders,
    getReceivingInfo,
    defendingHeaders,
    getDefendingInfo,
    rosterHeaders,
    getRosterInfo,
};
