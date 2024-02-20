
const mobilePassingHeaders = [
    'Cmp',
    'Att',
    'Yds',
    'TD',
    'INT',
    'QBR'
];

const mobilePassingFields = new Set([
    'completions',
    'pass_att',
    'pass_yards',
    'pass_tds',
    'ints',
    'pass_rating'
]);

const mobileRushingHeaders = [
    'Att',
    'Yds',
    'YPC',
    'TDs',
];

const mobileRushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_ypc',
    'rush_tds',
]);

const mobileReceivingHeaders = [
    'Rec',
    'Yds',
    'YPR',
    'TDs',
];

const mobileReceivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_ypc',
    'rec_tds',
]);

const mobileTackleHeaders = [
    'Name',
    'Team',
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
    'Name',
    'Team',
    'INTs',
    'FF',
    'FR',
    'TDs',
];

const mobileDefToFields = new Set([
    'ints_made',
    'forced_fumbles',
    'fumbles_rec',
    'def_tds',
]);

const mobileKickReturnHeaders = [
    'Name',
    'Team',
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

const mobilePuntReturnHeaders = [
    'Name',
    'Team',
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
    'Name',
    'Team',
    'FG',
    'FG Att',
    'FG %',
    'Long',
];

const mobileKickingFields = new Set([
    'fg_made',
    'fg_att',
    'fg_pct',
    'long_fg',
]);

const mobilePuntingHeaders = [
    'Name',
    'Team',
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
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
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
