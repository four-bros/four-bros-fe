// Get player abilities
const athleticAbilitiesHeaders = [
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

const athleticAbilityFields = new Set([
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

const passingAbilityHeaders = ['Th. Pow.', 'Th. Acc.'];

const passingAbilityFields = new Set(['throwing_power', 'throwing_accuracy']);

const rushingAbilitiesHeaders = [
    'Cry',
    'Br. Tkl.',
    'Stf. Arm',
    'Tr.',
    'Elus',
    'Spin',
    'Juke',
    'BCV',
];

const rushingAbilityFields = new Set([
    'carry',
    'break_tackle',
    'stiff_arm',
    'trucking',
    'elusiveness',
    'spin_move',
    'juke_move',
    'ball_carrier_vision',
]);

const recAbilitiesHeaders = ['Ctch', 'Rte', 'CiT', 'Rel.', 'Spec. Ctch.'];

const recAbilityFields = new Set([
    'catch',
    'route_running',
    'catch_in_traffic',
    'release',
    'spec_catch',
]);

const tackleAbilitiesHeaders = [
    'Tkl',
    'Hit Pow.',
    'Bl. Shed',
    'Pow. Move',
    'Fin. Move',
    'Purs.',
    'Play Rec.',
];

const tackleAbilityFields = new Set([
    'tackling',
    'hit_power',
    'block_shedding',
    'power_moves',
    'finesse_moves',
    'pursuit',
    'play_recognition',
]);

const coverageAbilitiesHeaders = ['Man', 'Zone', 'Press', 'Catch'];

const coverageAbilityFields = new Set([
    'man_coverage',
    'zone_coverage',
    'press',
    'catch',
]);

const playerPassingHeaders = [
    'Comp',
    'Att',
    'Yds',
    'YPG',
    'TDs',
    'INTs',
    'Rtg',
];

const passingFields = new Set([
    'completions',
    'pass_att',
    'pass_yards',
    'pass_yp_game',
    'pass_tds',
    'ints',
    'pass_rating',
]);

const playerRushingHeaders = ['Att', 'Yds', 'YPG', 'TDs', 'Br Tkl', 'Fum'];

const rushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_yp_game',
    'rush_tds',
    'broke_tkls',
    'fumbles',
]);

const playerRecHeaders = ['Rec', 'Yds', 'YPG', 'TDs', 'YAC', 'Drp'];

const receivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_yp_game',
    'rec_tds',
    'yac',
    'drops',
]);

const playerTackleHeaders = ['Tkls', 'TFL', 'Sacks', 'Pass Def'];

const tackleFields = new Set(['total_tkls', 'tfl', 'sacks', 'pass_def']);

const playerDefToHeaders = ['INTs', 'FF', 'FR', 'TDs', 'Safe.'];

const defToFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
    'safeties',
]);

const playerKrHeaders = ['Ret', 'Yds', 'AVG', 'Long', 'TDs'];

const kickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'long_kr',
    'kr_tds',
]);

const playerPrHeaders = ['Ret', 'Yds', 'AVG', 'Long', 'TDs'];

const puntReturnFields = new Set([
    'punt_returns',
    'pr_yds',
    'pr_avg',
    'long_pr',
    'pr_tds',
]);

const playerKickingHeaders = [
    'FG',
    'FG Att',
    'FG %',
    'Long',
    'XP',
    'XP Att',
    'XP %',
];

const kickingFields = new Set([
    'fg_made',
    'fg_att',
    'fg_pct',
    'long_fg',
    'xp_made',
    'xp_att',
    'xp_pct',
]);

const playerPuntingHeaders = ['Punts', 'Yds', 'AVG', 'Long', '< 20'];

const puntingFields = new Set([
    'number_punts',
    'total_punt_yards',
    'punt_avg',
    'long_punt',
    'inside_twenty',
]);

export {
    athleticAbilitiesHeaders,
    passingAbilityHeaders,
    rushingAbilitiesHeaders,
    recAbilitiesHeaders,
    tackleAbilitiesHeaders,
    coverageAbilitiesHeaders,
    playerPassingHeaders,
    playerRushingHeaders,
    playerRecHeaders,
    playerTackleHeaders,
    playerDefToHeaders,
    playerKrHeaders,
    playerPrHeaders,
    playerKickingHeaders,
    playerPuntingHeaders,
    athleticAbilityFields,
    passingAbilityFields,
    rushingAbilityFields,
    recAbilityFields,
    tackleAbilityFields,
    coverageAbilityFields,
    passingFields,
    rushingFields,
    receivingFields,
    tackleFields,
    defToFields,
    kickReturnFields,
    puntReturnFields,
    kickingFields,
    puntingFields,
};
