
const desktopTotalHeaders = [
    'Name',
    'Team',
    'Yds',
    'YPG',
    'TDs',
    'TOs'
]

const desktopTotalFields = new Set([
    'total_yards',
    'total_ypg',
    'total_tds',
    'turnovers'
])

const desktopPassingHeaders = [
    'Name',
    'Team',
    'Games',
    'Comp',
    'Att',
    'Yards',
    'YPA',
    'YPG',
    'TDs',
    'INTs',
    'Rating',
    'Long',
    'Sacked'
];

const desktopPassingFields = new Set([
    'games_played',
    'completions',
    'pass_att',
    'pass_yards',
    'pass_yp_attempt',
    'pass_yp_game',
    'pass_tds',
    'ints',
    'pass_rating',
    'longest_pass',
    'sacked'
]);

const desktopRushingHeaders = [
    'Name',
    'Team',
    'Games',
    'Att',
    'Yards',
    'YPC',
    'YPG', 
    'TDs',
    '20+ Runs',
    'Broken Tackles',
    'YAC',
    'Fumbles'
];

const desktopRushingFields = new Set([
    'games_played',
    'rush_att',
    'rush_yards',
    'rush_yp_carry',
    'rush_yp_game',
    'rush_tds',
    'twenty_plus_yd_runs',
    'broke_tkls',
    'ya_contact',
    'fumbles',
]);

const desktopReceivingHeaders = [
    'Name',
    'Team',
    'Games',
    'Catches',
    'Yards',
    'YPC',
    'YPG',
    'TDs',
    'YAC',
    'Drops'
];

const desktopReceivingFields = new Set([
    'games_played',
    'receptions',
    'rec_yards',
    'rec_yp_catch',
    'rec_yp_game',
    'rec_tds',
    'yac',
    'drops',
]);

const desktopDefenseHeaders = [
    'Name',
    'Team',
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
    'Name',
    'Team',
    'Games',
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopKickReturnFields = new Set([
    'games_played',
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const desktopPuntReturnHeaders = [
    'Name',
    'Team',
    'Games',
    'Returns',
    'Yards',
    'AVG',
    'Long',
    'TDs'
];

const desktopPuntReturnFields = new Set([
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
