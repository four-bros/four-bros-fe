
const desktopTotalHeaders = [
    'Year',
    'Games',
    'Yds',
    'YPG',
    'TDs',
    'TOs',
]

const desktopTotalFields = new Set([
    'year',
    'games_played',
    'total_yards',
    'total_ypg',
    'total_tds',
    'turnovers',
])

const desktopPassingHeaders = [
    'Year',
    'Games',
    'Comp',
    'Att',
    '%',
    'Yards',
    'YPA',
    'YPG',
    'TDs',
    'INTs',
    'Long',
    'Sacked',
    'Rating',
];

const desktopPassingFields = new Set([
    'year',
    'games_played',
    'completions',
    'pass_att',
    'comp_pct',
    'pass_yards',
    'pass_ypa',
    'pass_ypg',
    'pass_tds',
    'ints',
    'longest_pass',
    'sacked',
    'pass_rating',
]);

const desktopRushingHeaders = [
    'Year',
    'Games',
    'Att',
    'Yards',
    'YPC',
    'YPG', 
    'TDs',
    'Long',
    'Broken Tackles',
    'YAC',
    '20+ Runs',
    'Fumbles'
];

const desktopRushingFields = new Set([
    'year',
    'games_played',
    'rush_att',
    'rush_yards',
    'rush_ypc',
    'rush_ypg',
    'rush_tds',
    'longest_run',
    'broke_tkls',
    'ya_contact',
    'twenty_plus_yd_runs',
    'fumbles',
]);

const desktopReceivingHeaders = [
    'Year',
    'Games',
    'Catches',
    'Yards',
    'YPC',
    'YPG',
    'TDs',
    'Long',
    'YAC',
    'Drops'
];

const desktopReceivingFields = new Set([
    'year',
    'games_played',
    'receptions',
    'rec_yards',
    'rec_ypc',
    'rec_ypg',
    'rec_tds',
    'longest_rec',
    'yac',
    'drops',
]);

const desktopDefenseHeaders = [
    'Year',
    'Games',
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
    'year',
    'games_played',
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
    'Year',
    'Games',
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopKickReturnFields = new Set([
    'year',
    'games_played',
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const desktopPuntReturnHeaders = [
    'Year',
    'Games',
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopPuntReturnFields = new Set([
    'year',
    'games_played',
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

const desktopKickingHeaders = [
    'Name',
    'Team',
    'Games',
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
    'games_played',
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
    'Name',
    'Team',
    'Games',
    'Punts',
    'Yards',
    'AVG',
    'Net AVG',
    'Long',
    'Inside 20'
];

const desktopPuntingFields = new Set([
    'games_played',
    'number_punts',
    'total_punt_yards',
    'punt_avg',
    'net_avg',
    'long_punt',
    'inside_twenty',
]);

export {
    desktopTotalHeaders,
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopReceivingHeaders,
    desktopDefenseHeaders,
    desktopKickReturnHeaders,
    desktopPuntReturnHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopTotalFields,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
};
