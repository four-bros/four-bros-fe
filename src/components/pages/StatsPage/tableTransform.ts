
const passingHeaders = ['Name', 'Team', 'Comp.', 'Att.', 'Yds', 'YPG', 'TDs', 'INTs'];

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
    'Team',
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

const receivingHeaders = ['Name', 'Team', 'Rec', 'Yds', 'YPR', 'YPG', 'TDs', 'YAC'];

const receivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_yp_catch',
    'rec_yp_game',
    'rec_tds',
    'yac',
]);

const defendingHeaders = ['Name', 'Team', 'Tackles', 'TFL', 'Sacks', 'Pass Def.'];

const defendingFields = new Set([
    'total_tkls',
    'tfl',
    'sacks',
    'pass_def'
]);

const defensiveTurnoverHeaders = ['Name', 'Team', 'INTs', 'FF', 'FR', 'TDs'];

const defensiveTurnoverFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
]);

// Used for both kickReturnInfo and puntReturnInfo
const returnsHeaders = ['Name', 'Team', 'Ret.', 'Yards', 'AVG', 'Long', 'TDs'];

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
    'Team',
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
    'Team',
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

const totalHeaders = [
    'Name',
    'Team',
    'Yards',
    'YPG',
    'TDs',
    'TOs',
];

const totalFields = new Set([
    'total_yards',
    'total_ypg',
    'total_tds',
    'turnovers',
]);


export {
    passingHeaders,
    rushingHeaders,
    receivingHeaders,
    defendingHeaders,
    defensiveTurnoverHeaders,
    returnsHeaders,
    kickingHeaders,
    puntingHeaders,
    totalHeaders,
    passingFields,
    rushingFields,
    receivingFields,
    defendingFields,
    defensiveTurnoverFields,
    kickReturnFields,
    puntReturnFields,
    kickingFields,
    puntingFields,
    totalFields
};
