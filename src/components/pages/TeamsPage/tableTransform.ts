import { TeamDetails, Team, TeamStats } from 'api/teams';

const getOverviewInfo = (
    overview: TeamDetails,
    simplifiedTeam: Team
): [
    string[],
    (string | number)[],
    (string | number)[],
    (string | number)[],
    (string | number)[]
] => {
    return [
        ['Record', `${simplifiedTeam.wins} - ${simplifiedTeam.losses}`],
        ['Overall', overview.avg_overall],
        ['Offense', overview.avg_offense],
        ['Defense', overview.avg_defense],
        ['Sp. Teams', overview.avg_sp_teams],
    ];
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

const rushingHeaders = [
    'Name',
    'Att',
    'Yards',
    'YPC',
    'YPG',
    'TDs',
    'Br. Tkls',
];

const rushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_yp_carry',
    'rush_yp_game',
    'rush_tds',
    'broke_tkls',
]);

const receivingHeaders = ['Name', 'Rec', 'Yds', 'YPG', 'TDs', 'YAC', 'Drp'];

const receivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_yp_game',
    'rec_tds',
    'yac',
    'drops',
]);

const defendingHeaders = ['Name', 'Tackles', 'TFL', 'Sacks', 'Pass Def.'];

const defendingFields = new Set([
    'total_tkls',
    'tfl',
    'sacks',
    'pass_def'
]);

const defensiveTurnoverHeaders = ['Name', 'INTs', 'FF', 'FR', 'TDs'];

const defensiveTurnoverFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
]);

// Used for both kickReturnInfo and puntReturnInfo
const returnsHeaders = ['Name', 'Ret.', 'Yards', 'AVG', 'Long', 'TDs'];

const kickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const puntReturnFields = new Set([
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

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

const rosterHeaders = ['Name', 'Class', 'Ht/Wt', '#', 'Pos', 'Overall'];

const rosterFields = new Set([
    'player_year',
    'jersey_number',
    'position',
    'overall',
]);

const getOffenseOverview = (
    overallStats: TeamStats
): [
    (string | number)[],
    (string | number)[],
    (string | number)[],
    (string | number)[]
] => {
    return [
        ['PPG', overallStats.ppg],
        ['Total YPG', overallStats.total_ypg],
        ['Rush YPG', overallStats.rush_ypg],
        ['Pass YPG', overallStats.pass_ypg],
    ];
};

const getDefenseOverview = (
    overallStats: TeamStats
): [
    (string | number)[],
    (string | number)[],
    (string | number)[],
    (string | number)[]
] => {
    return [
        ['TOs', overallStats.turnovers],
        ['INTs', overallStats.ints],
        ['Fumbles', overallStats.fr],
        ['Def. TDs', overallStats.def_tds],
    ];
};

const getTopThree = (topPerformers: Array<any>): Array<any> => {
    if (topPerformers.length <= 3) {
        return topPerformers;
    }
    return [topPerformers[0], topPerformers[1], topPerformers[2]];
};

export {
    getOverviewInfo,
    passingHeaders,
    rushingHeaders,
    receivingHeaders,
    defendingHeaders,
    defensiveTurnoverHeaders,
    returnsHeaders,
    kickingHeaders,
    puntingHeaders,
    rosterHeaders,
    getDefenseOverview,
    getOffenseOverview,
    getTopThree,
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
