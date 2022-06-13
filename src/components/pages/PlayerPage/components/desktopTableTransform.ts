// Get player abilities
const desktopAthleticAbilitiesHeaders = [
    'Overall',
    'Speed',
    'Strength',
    'Agility',
    'Acceleration',
    'Stamina',
    'Jump',
    'Injury',
    'Awareness',
];

const desktopAthleticAbilityFields = new Set([
    'overall',
    'speed',
    'strength',
    'agility',
    'acceleration',
    'stamina',
    'jump',
    'injury',
    'awareness',
]);

const desktopOffenseAbilitiesHeaders = [
    'Throw Power',
    'Throw Acc.',
    'Carry',
    'Break Tackle',
    'Stiff Arm',
    'Truck',
    'Elus.',
    'Spin',
    'Juke',
    'BCV',
    'Catch',
    'Routes',
    'CiT',
    'Release',
    'Spec. Catch'
];

const desktopOffenseAbilitiesFields = new Set([
    'throwing_power',
    'throwing_accuracy',
    'carry',
    'break_tackle',
    'stiff_arm',
    'trucking',
    'elusiveness',
    'spin_move',
    'juke_move',
    'ball_carrier_vision',
    'catch',
    'route_running',
    'catch_in_traffic',
    'release',
    'spec_catch',
]);

const desktopDefenseAbilitiesHeaders = [
    'Tackle',
    'Hit Power',
    'Block Shed',
    'Power Move',
    'Finesse Move',
    'Pursuit',
    'Play Rec.',
    'Man Cov.',
    'Zone Cov.',
    'Press',
    'Catch'
];

const desktopDefenseAbilitiesFields = new Set([
    'tackling',
    'hit_power',
    'block_shedding',
    'power_moves',
    'finesse_moves',
    'pursuit',
    'play_recognition',
    'man_coverage',
    'zone_coverage',
    'press',
    'catch',
]);

const desktopPassingHeaders = [
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

const desktopRecHeaders = [
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

const desktopDefHeaders = [
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


const desktopKrHeaders = [
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

const desktopPrHeaders = [
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
    desktopAthleticAbilitiesHeaders,
    desktopOffenseAbilitiesHeaders,
    desktopDefenseAbilitiesHeaders,
    desktopOffenseAbilitiesFields,
    desktopPassingHeaders,
    desktopRushingHeaders,
    desktopRecHeaders,
    desktopDefHeaders,
    desktopKrHeaders,
    desktopPrHeaders,
    desktopKickingHeaders,
    desktopPuntingHeaders,
    desktopAthleticAbilityFields,
    desktopDefenseAbilitiesFields,
    desktopPassingFields,
    desktopRushingFields,
    desktopReceivingFields,
    desktopDefenseFields,
    desktopKickReturnFields,
    desktopPuntReturnFields,
    desktopKickingFields,
    desktopPuntingFields,
};
