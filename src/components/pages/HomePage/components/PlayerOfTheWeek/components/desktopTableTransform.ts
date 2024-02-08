
const desktopPotgHeaders = [
    'Comp',
    'Att',
    '%',
    'Pass Yards',
    'Pass TDs',
    'INTs',
    'Rating',
    'Rush Att',
    'Rush Yards',
    'YPC',
    'Rush TDs',
    'Catches',
    'Rec Yards',
    'YPC',
    'TDs',
];

const desktopPotgFields = new Set([
    'completions',
    'pass_att',
    'comp_pct',
    'pass_yards',
    'pass_tds',
    'ints',
    'pass_rating',
    'rush_att',
    'rush_yards',
    'rush_ypc',
    'rush_tds',
    'receptions',
    'rec_yards',
    'rec_ypc',
    'rec_tds',
]);

const desktopPassingHeaders = [
    'Comp',
    'Att',
    '%',
    'Yards',
    'YPA',
    'TDs',
    'INTs',
    'Long',
    'Sacked',
    'Rating',
];

const desktopPassingFields = new Set([
    'completions',
    'pass_att',
    'comp_pct',
    'pass_yards',
    'pass_ypa',
    'pass_tds',
    'ints',
    'longest_pass',
    'sacked',
    'pass_rating',
]);

const desktopRushingHeaders = [
    'Att',
    'Yards',
    'YPC',
    'TDs',
    'Long',
    'Br. Tackles',
    'YAC',
    '20+ Runs',
    'Fumbles'
];

const desktopRushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_ypc',
    'rush_tds',
    'longest_run',
    'broke_tkls',
    'ya_contact',
    'twenty_plus_yd_runs',
    'fumbles',
]);

const desktopReceivingHeaders = [
    'Catches',
    'Yards',
    'YPC',
    'TDs',
    'Long',
    'YAC',
    'Drops'
];

const desktopReceivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_ypc',
    'rec_tds',
    'longest_rec',
    'yac',
    'drops',
]);

const desktopDefenseHeaders = [
    'Tackles',
    'TFL',
    'Sacks',
    'Pass Def',
    'INTs',
    'INT Ret. Yds.',
    'FF',
    'FR',
    'FR Yards',
    'Safeties',
    'Blocks',
    'TDs',
]

const desktopDefenseFields = new Set([
    'total_tkls',
    'tfl',
    'sacks',
    'pass_def',
    'ints_made',
    'int_ret_yards',
    'forced_fumbles',
    'fumbles_rec',
    'fum_rec_yards',
    'safeties',
    'blocked_kicks',
    'def_tds',
])


const desktopKickReturnHeaders = [
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopKickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const desktopPuntReturnHeaders = [
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopPuntReturnFields = new Set([
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

const desktopKickingHeaders = [
    'FG',
    'FG Att',
    'FG %',
    'FG 50+',
    'FG 50+ Pct',
    'Long',
    'XP',
    'XP Att',
    'XP %',
];

const desktopKickingFields = new Set([
    'fg_made',
    'fg_att',
    'fg_pct',
    'fg_made_50_plus',
    'fg_50_plus_pct',
    'long_fg',
    'xp_made',
    'xp_att',
    'xp_pct',
]);

const desktopPuntingHeaders = [
    'Punts',
    'Yards',
    'AVG',
    'Net AVG',
    'Long',
    'Inside 20'
];

const desktopPuntingFields = new Set([
    'number_punts',
    'total_punt_yards',
    'punt_avg',
    'net_avg',
    'long_punt',
    'inside_twenty',
]);

const desktopTotalHeaders = [
    'Yds',
    'TDs',
    'TOs'
]

const desktopTotalFields = new Set([
    'total_yards',
    'total_tds',
    'turnovers'
])

export {
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopTotalHeaders,
    desktopPotgHeaders,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
    desktopTotalFields,
    desktopPotgFields
};
