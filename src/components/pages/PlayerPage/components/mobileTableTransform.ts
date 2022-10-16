// Get player abilities
const mobileAthleticAbilitiesHeaders = [
    'Ovr',
    'Spd',
    'Str',
    'Ag',
    'Acc',
    'Stm',
    'Jmp',
    'Inj',
];

const mobileAthleticAbilityFields = new Set([
    'overall',
    'speed',
    'strength',
    'agility',
    'acceleration',
    'stamina',
    'jump',
    'injury',
]);

const mobilePassingAbilityHeaders = [
    'Th. Pow.',
    'Th. Acc.',
    'Awr',
];

const mobilePassingAbilityFields = new Set([
    'throwing_power',
    'throwing_accuracy',
    'awareness',
]);

const mobileRushingAbilitiesHeaders = [
    'Car',
    'B.T.',
    'S.A.',
    'Tr.',
    'Els',
    'Spn',
    'Jk',
    'BCV',
];

const mobileRushingAbilityFields = new Set([
    'carry',
    'break_tackle',
    'stiff_arm',
    'trucking',
    'elusiveness',
    'spin_move',
    'juke_move',
    'ball_carrier_vision',
]);

const mobileRecAbilitiesHeaders = [
    'Catch',
    'Route',
    'CiT',
    'Rel.',
    'Spec. Catch'
];

const mobileRecAbilityFields = new Set([
    'catch',
    'route_running',
    'catch_in_traffic',
    'release',
    'spec_catch',
]);

const mobileTackleAbilitiesHeaders = [
    'Tkl',
    'Hit Pow.',
    'Shed',
    'Pow',
    'Fin',
    'Purs',
    'Rec',
];

const mobileTackleAbilityFields = new Set([
    'tackling',
    'hit_power',
    'block_shedding',
    'power_moves',
    'finesse_moves',
    'pursuit',
    'play_recognition',
]);

const mobileCoverageAbilitiesHeaders = [
    'Man',
    'Zone',
    'Press',
    'Catch',
    'Awr',
];

const mobileCoverageAbilityFields = new Set([
    'man_coverage',
    'zone_coverage',
    'press',
    'catch',
    'awareness'
]);

const mobileTotalHeaders = [
    'GP',
    'TDs',
    'Yds',
    'YPG',
    'TO'
]

const mobileTotalFields = new Set([
    'games_played',
    'total_tds',
    'total_yards',
    'total_ypg',
    'turnovers',
]);

const mobilePassingHeaders = [
    'Wk',
    'Cmp',
    'Att',
    'Yds',
    'YPG',
    'TD',
    'INT',
    'Rtg',
];


const mobilePassingFields = new Set([
    'games_played',
    'completions',
    'pass_att',
    'pass_yards',
    'pass_ypg',
    'pass_tds',
    'ints',
    'pass_rating',
]);

const mobileRushingHeaders = [
    'GP',
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'Br Tkl',
    'Fum'
];

const mobileRushingFields = new Set([
    'games_played',
    'rush_att',
    'rush_yards',
    'rush_ypg',
    'rush_tds',
    'broke_tkls',
    'fumbles',
]);

const mobileRecHeaders = [
    'GP',
    'Rec',
    'Yds',
    'YPG',
    'TDs',
    'YAC', 
    'Drp'
];

const mobileReceivingFields = new Set([
    'games_played',
    'receptions',
    'rec_yards',
    'rec_ypg',
    'rec_tds',
    'yac',
    'drops',
]);

const mobileTackleHeaders = [
    'GP',
    'Tkls',
    'TFL',
    'Sacks',
    'Pass Def'
];

const mobileTackleFields = new Set([
    'games_played',
    'total_tkls',
    'tfl',
    'sacks',
    'pass_def'
]);

const mobileDefToHeaders = [
    'GP',
    'INTs',
    'FF',
    'FR',
    'TDs',
    'Safe.'
];

const mobileDefToFields = new Set([
    'games_played',
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
    'safeties',
]);

const mobileKrHeaders = [
    'GP',
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
];

const mobileKickReturnFields = new Set([
    'games_played',
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const mobilePrHeaders = [
    'GP',
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
];

const mobilePuntReturnFields = new Set([
    'games_played',
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

const mobileKickingHeaders = [
    'FG',
    'FG Att',
    'FG %',
    'Long',
    'XP',
    'XP Att',
    'XP %',
];

const mobileKickingFields = new Set([
    'fg_made',
    'fg_att',
    'fg_pct',
    'long_fg',
    'xp_made',
    'xp_att',
    'xp_pct',
]);

const mobilePuntingHeaders = [
    'Punts',
    'Yds',
    'AVG',
    'Long',
    '< 20'
];

const mobilePuntingFields = new Set([
    'number_punts',
    'total_punt_yards',
    'punt_avg',
    'long_punt',
    'inside_twenty',
]);

export {
    mobileAthleticAbilitiesHeaders,
    mobilePassingAbilityHeaders,
    mobileRushingAbilitiesHeaders,
    mobileRecAbilitiesHeaders,
    mobileTackleAbilitiesHeaders,
    mobileCoverageAbilitiesHeaders,
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileRecHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKrHeaders,
    mobilePrHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
    mobileTotalHeaders,
    mobileAthleticAbilityFields,
    mobilePassingAbilityFields,
    mobileRushingAbilityFields,
    mobileRecAbilityFields,
    mobileTackleAbilityFields,
    mobileCoverageAbilityFields,
    mobilePassingFields,
    mobileRushingFields,
    mobileReceivingFields,
    mobileTackleFields,
    mobileDefToFields,
    mobileKickReturnFields,
    mobilePuntReturnFields,
    mobileKickingFields,
    mobilePuntingFields,
    mobileTotalFields
};
