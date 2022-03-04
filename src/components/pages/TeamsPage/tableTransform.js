import { Link } from 'react-router-dom';

const getOverviewInfo = (overview, simplifiedTeam) => {
    return [
        ['Record', `${simplifiedTeam.wins} - ${simplifiedTeam.losses}`],
        ['Overall', overview.avg_overall],
        ['Offense', overview.avg_offense],
        ['Defense', overview.avg_defense],
        ['Sp. Teams', overview.avg_sp_teams],
    ];
};

const passingHeaders = [
    'Name',
    'Comp.',
    'Att.',
    'Yds',
    'YPG',
    'TDs',
    'INTs',
    // 'Rating',
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

const getRushingInfo = (rushingLeaders) => {
    let renderedInfo = [];

    rushingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
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

const getReceivingInfo = (receivingLeaders) => {
    let renderedInfo = [];

    receivingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
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

const getDefendingInfo = (defendingLeaders) => {
    let renderedInfo = [];

    defendingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.defensive_stats.total_tkls,
            leader.defensive_stats.tfl,
            leader.defensive_stats.sacks,
            leader.defensive_stats.pass_def,
        ]);
    });

    return renderedInfo;
};

const defTurnoverHeaders = ['Name', 'INTs', 'FF', 'FR', 'TDs'];

const getDefTurnoverInfo = (defendingLeaders) => {
    let renderedInfo = [];

    defendingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
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

const getKickReturnsInfo = (kickReturnLeaders) => {
    let renderedInfo = [];

    kickReturnLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.return_stats.kick_returns,
            leader.return_stats.kr_yds,
            leader.return_stats.kr_avg,
            leader.return_stats.long_kr,
            leader.return_stats.kr_tds,
        ]);
    });

    return renderedInfo;
};

const getPuntReturnsInfo = (puntReturnLeaders) => {
    let renderedInfo = [];

    puntReturnLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.return_stats.punt_returns,
            leader.return_stats.pr_yds,
            leader.return_stats.pr_avg,
            leader.return_stats.long_pr,
            leader.return_stats.pr_tds,
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

const getKickingInfo = (kickingLeaders) => {
    let renderedInfo = [];

    kickingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
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

const getPuntingInfo = (puntingLeaders) => {
    let renderedInfo = [];

    puntingLeaders.map((leader) => {
        return renderedInfo.push([
            `${leader.player_details.first_name} ${leader.player_details.last_name}`,
            leader.kicking_stats.number_punts,
            leader.kicking_stats.total_punt_yards,
            leader.kicking_stats.punt_avg,
            leader.kicking_stats.long_punt,
            leader.kicking_stats.inside_twenty,
        ]);
    });

    return renderedInfo;
};

const rosterHeaders = ['Name', 'Class', 'Ht/Wt', '#', 'Pos', 'Overall'];

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

const getOffenseOverview = (overallStats) => {
    return [
        ['PPG', overallStats.ppg],
        ['Total YPG', overallStats.total_ypg],
        ['Rush YPG', overallStats.rush_ypg],
        ['Pass YPG', overallStats.pass_ypg],
    ];
};

const getDefenseOverview = (overallStats) => {
    return [
        ['TOs', overallStats.turnovers],
        ['INTs', overallStats.ints],
        ['Fumbles', overallStats.fr],
        ['Def. TDs', overallStats.def_tds],
    ];
};

const getTopThree = (topPerformers) => {
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
    defTurnoverHeaders as turnoverHeaders,
    getDefTurnoverInfo as getTurnoverInfo,
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
};
