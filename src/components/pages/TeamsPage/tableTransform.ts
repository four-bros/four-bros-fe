// import { Link } from 'react-router-dom';
import { TeamDetails, Team } from 'api/teams';

const getOverviewInfo = (overview: TeamDetails, simplifiedTeam: Team) => {
    return [
        ['Record', `${simplifiedTeam.wins} - ${simplifiedTeam.losses}`],
        ['Overall', overview.avg_overall],
        ['Offense', overview.avg_offense],
        ['Defense', overview.avg_defense],
        ['Sp. Teams', overview.avg_sp_teams],
    ];
};

const getFields = (obj: any, fields: Set<string>, infoType: string) => {
    let valuesSet = new Set();
    // for (const [key, value] of Object.entries(obj)) {
    //     if (fields.has(key)) {
    //         valuesSet.add(`${key}-${value}`);
    //     }
    // }
    fields.forEach((element: any) => {
        valuesSet.add(`${element} -- ${obj[element]}`);
    });

    return valuesSet;
};

const passingHeaders = ['Name', 'Comp.', 'Att.', 'Yds', 'YPG', 'TDs', 'INTs'];

const passingFields = new Set([
    'completions',
    'pass_att',
    'pass_yards',
    'pass_yp_game',
    'pass_tds',
    'ints',
]);

const getPassingInfo = (passingLeaders: any) => {
    let renderedInfo: any = [];

    // getFields(passingLeaders[0].passing_stats, passingFields);

    passingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.passing_stats.completions,
            leader.passing_stats.pass_att,
            leader.passing_stats.pass_yards,
            leader.passing_stats.pass_yp_game,
            leader.passing_stats.pass_tds,
            leader.passing_stats.ints,
            // leader.passing_stats.pass_rating,
        ]);
    });
    return renderedInfo;
};

const rushingHeaders = [
    'Name',
    'Att',
    'Yards',
    'YPG',
    'TDs',
    'Br. Tkls',
    'Fum',
];

const rushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_yp_game',
    'rush_tds',
    'broke_tkls',
    'fumbles',
]);

const getRushingInfo = (rushingLeaders: any) => {
    let renderedInfo: any = [];

    rushingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.rushing_stats.rush_att,
            leader.rushing_stats.rush_yards,
            leader.rushing_stats.rush_yp_game,
            leader.rushing_stats.rush_tds,
            leader.rushing_stats.broke_tkls,
            leader.rushing_stats.fumbles,
        ]);
    });
    return renderedInfo;
};

const receivingHeaders = ['Name', 'Rec', 'Yds', 'YPG', 'TDs', 'YAC', 'Drp'];

const receivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_yp_game',
    'rec_tds',
    'yac',
    'drops',
]);

const getReceivingInfo = (receivingLeaders: any) => {
    let renderedInfo: any = [];

    receivingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.receiving_stats.receptions,
            leader.receiving_stats.rec_yards,
            leader.receiving_stats.rec_yp_game,
            leader.receiving_stats.rec_tds,
            leader.receiving_stats.yac,
            leader.receiving_stats.drops,
        ]);
    });

    return renderedInfo;
};

const defendingHeaders = ['Name', 'Tackles', 'TFL', 'Sacks', 'Pass Def.'];

const defendingFields = new Set(['total_tkls', 'tfl', 'sacks', 'pass_def']);

const getDefendingInfo = (defendingLeaders: any) => {
    let renderedInfo: any = [];

    defendingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.defensive_stats.total_tkls,
            leader.defensive_stats.tfl,
            leader.defensive_stats.sacks,
            leader.defensive_stats.pass_def,
        ]);
    });

    return renderedInfo;
};

const defensiveTurnoverHeaders = ['Name', 'INTs', 'FF', 'FR', 'TDs'];

const defensiveTurnoverFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
]);

const getDefTurnoverInfo = (defendingLeaders: any) => {
    let renderedInfo: any = [];

    defendingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.defensive_stats.ints_made,
            leader.defensive_stats.forced_fumbles,
            leader.defensive_stats.fumbles_rec,
            leader.defensive_stats.def_tds,
        ]);
    });

    return renderedInfo;
};

// Used for both kickReturnInfo and puntReturnInfo
const returnsHeaders = ['Name', 'Ret.', 'Yards', 'AVG', 'Long', 'TDs'];

const kickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const getKickReturnsInfo = (kickReturnLeaders: any) => {
    let renderedInfo: any = [];

    kickReturnLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.kick_return_stats.kick_returns,
            leader.kick_return_stats.kr_yds,
            leader.kick_return_stats.kr_avg,
            leader.kick_return_stats.long_kr,
            leader.kick_return_stats.kr_tds,
        ]);
    });

    return renderedInfo;
};

const puntReturnFields = new Set([
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

const getPuntReturnsInfo = (puntReturnLeaders: any) => {
    let renderedInfo: any = [];

    puntReturnLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.punt_return_stats.punt_returns,
            leader.punt_return_stats.pr_yds,
            leader.punt_return_stats.pr_avg,
            leader.punt_return_stats.long_pr,
            leader.punt_return_stats.pr_tds,
        ]);
    });

    return renderedInfo;
};

const kickingHeaders = [
    'Name',
    'FG Made',
    'FG Att',
    'FG %',
    'Long',
    'XP Made',
    'XP Att',
];

const kickingFields = new Set([
    'fg_made',
    'fg_att',
    'fg_pct',
    'long_fg',
    'xp_made',
    'xp_att',
]);

const getKickingInfo = (kickingLeaders: any) => {
    let renderedInfo: any = [];

    kickingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.kicking_stats.fg_made,
            leader.kicking_stats.fg_att,
            leader.kicking_stats.fg_pct,
            leader.kicking_stats.long_fg,
            leader.kicking_stats.xp_made,
            leader.kicking_stats.xp_att,
        ]);
    });

    return renderedInfo;
};

const puntingHeaders = [
    'Name',
    'Punts',
    'Punt Yards',
    'Punt AVG',
    'Long',
    'Inside 20',
];

const puntingFields = new Set([
    'number_punts',
    'total_punt_yards',
    'punt_avg',
    'long_punt',
    'inside_twenty',
]);

const getPuntingInfo = (puntingLeaders: any) => {
    let renderedInfo: any = [];

    puntingLeaders.map((leader: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${leader.player_details.id}`}>
            //     {leader.player_details.first_name} {leader.player_details.last_name}
            // </Link>,
            leader.punting_stats.number_punts,
            leader.punting_stats.total_punt_yards,
            leader.punting_stats.punt_avg,
            leader.punting_stats.long_punt,
            leader.punting_stats.inside_twenty,
        ]);
    });

    return renderedInfo;
};

const rosterHeaders = ['Name', 'Class', 'Ht/Wt', '#', 'Pos', 'Overall'];

const rosterFields = new Set([
    'player_year',
    'jersey_number',
    'position',
    'overall',
]);

const getRosterInfo = (roster: any) => {
    let renderedInfo: any = [];

    roster.map((player: any) => {
        return renderedInfo.push([
            // <Link to={`/players/${player.id}`}>
            //     {player.first_name} {player.last_name}
            // </Link>,
            player.player_year,
            `${player.height} / ${player.weight}`,
            player.jersey_number,
            player.position,
            player.overall,
        ]);
    });

    return renderedInfo;
};

const getOffenseOverview = (overallStats: any) => {
    return [
        ['PPG', overallStats.ppg],
        ['Total YPG', overallStats.total_ypg],
        ['Rush YPG', overallStats.rush_ypg],
        ['Pass YPG', overallStats.pass_ypg],
    ];
};

const getDefenseOverview = (overallStats: any) => {
    return [
        ['TOs', overallStats.turnovers],
        ['INTs', overallStats.ints],
        ['Fumbles', overallStats.fr],
        ['Def. TDs', overallStats.def_tds],
    ];
};

const getTopThree = (topPerformers: any) => {
    if (topPerformers.length <= 3) {
        return topPerformers;
    }
    return [topPerformers[0], topPerformers[1], topPerformers[2]];
};

export {
    getOverviewInfo,
    passingHeaders,
    getPassingInfo,
    rushingHeaders,
    getRushingInfo,
    receivingHeaders,
    getReceivingInfo,
    defendingHeaders,
    getDefendingInfo,
    defensiveTurnoverHeaders,
    getDefTurnoverInfo,
    returnsHeaders,
    getKickReturnsInfo,
    getPuntReturnsInfo,
    kickingHeaders,
    getKickingInfo,
    puntingHeaders,
    getPuntingInfo,
    rosterHeaders,
    getRosterInfo,
    getDefenseOverview,
    getOffenseOverview,
    getTopThree,
    getFields,
    passingFields,
    rushingFields,
    receivingFields,
    defendingFields,
    defensiveTurnoverFields,
    kickReturnFields,
    puntReturnFields,
    kickingFields,
    puntingFields,
    rosterFields,
};
