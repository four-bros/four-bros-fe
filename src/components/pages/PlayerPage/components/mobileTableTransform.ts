// Get player abilities
const mobileAthleticAbilitiesHeaders = [
    'Ovr.',
    'Spd.',
    'Str.',
    'Agl.',
    'Acc.',
    'Stam.',
    'Jmp.',
    'Inj.',
    'Awr.',
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
    'awareness',
]);

const mobilePassingAbilityHeaders = ['Th. Pow.', 'Th. Acc.'];

const mobilePassingAbilityFields = new Set(['throwing_power', 'throwing_accuracy']);

const mobileRushingAbilitiesHeaders = [
    'Cry',
    'Br. Tkl.',
    'Stf. Arm',
    'Tr.',
    'Elus',
    'Spin',
    'Juke',
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

const mobileRecAbilitiesHeaders = ['Ctch', 'Rte', 'CiT', 'Rel.', 'Spec. Ctch.'];

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
    'Bl. Shed',
    'Pow. Move',
    'Fin. Move',
    'Purs.',
    'Play Rec.',
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

const mobileCoverageAbilitiesHeaders = ['Man', 'Zone', 'Press', 'Catch'];

const mobileCoverageAbilityFields = new Set([
    'man_coverage',
    'zone_coverage',
    'press',
    'catch',
]);

const mobilePassingHeaders = [
    'Comp',
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'INTs',
    'Rtg',
];

const mobilePassingFields = new Set([
    'completions',
    'pass_att',
    'pass_yards',
    'pass_yp_game',
    'pass_tds',
    'ints',
    'pass_rating',
]);

const mobileRushingHeaders = [
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'Br Tkl',
    'Fum'
];

const mobileRushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_yp_game',
    'rush_tds',
    'broke_tkls',
    'fumbles',
]);

const mobileRecHeaders = [
    'Rec',
    'Yds',
    'YPG',
    'TDs',
    'YAC', 
    'Drp'
];

const mobileReceivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_yp_game',
    'rec_tds',
    'yac',
    'drops',
]);

const mobileTackleHeaders = [
    'Tkls',
    'TFL',
    'Sacks',
    'Pass Def'
];

const mobileTackleFields = new Set([
    'total_tkls',
    'tfl',
    'sacks',
    'pass_def'
]);

const mobileDefToHeaders = [
    'INTs',
    'FF',
    'FR',
    'TDs',
    'Safe.'
];

const mobileDefToFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
    'safeties',
]);

const mobileKrHeaders = [
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
];

const mobileKickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const mobilePrHeaders = [
    'Ret',
    'Yds',
    'AVG',
    'Long',
    'TDs'
];

const mobilePuntReturnFields = new Set([
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
};
