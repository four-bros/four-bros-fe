
const mobileTotalHeaders = [
    'Yr',
    'GP',
    'Yds',
    'YPG',
    'TDs',
]

const mobileTotalFields = new Set([
    'year',
    'games_played',
    'total_yards',
    'total_ypg',
    'total_tds',
])


const mobilePassingHeaders = [
    'Name',
    'Team',
    'Yds',
    'YPG',
    'TDs',
    'INTs',
];

const mobilePassingFields = new Set([
    'pass_yards',
    'pass_ypg',
    'pass_tds',
    'ints',
]);

const mobileRushingHeaders = [
    'Name',
    'Team',
    'Att',
    'Yds',
    'YPG',
    'TDs',
];

const mobileRushingFields = new Set([
    'rush_att',
    'rush_yards',
    'rush_ypg',
    'rush_tds',
]);

const mobileReceivingHeaders = [
    'Name',
    'Team',
    'Rec',
    'Yds',
    'YPG',
    'TDs',
];

const mobileReceivingFields = new Set([
    'receptions',
    'rec_yards',
    'rec_ypg',
    'rec_tds',
]);

const mobileTackleHeaders = [
    'Name',
    'Team',
    'Tkls',
    'TFL',
    'Sacks',
];

const mobileTackleFields = new Set([
    'total_tkls',
    'tfl',
    'sacks',
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
    'TDs'
];

const mobileKickReturnFields = new Set([
    'kick_returns',
    'kr_yds',
    'kr_avg',
    'kr_tds',
]);

const mobilePuntReturnHeaders = [
    'Name',
    'Team',
    'Ret',
    'Yds',
    'AVG',
    'TDs'
];

const mobilePuntReturnFields = new Set([
    'punt_returns',
    'pr_yds',
    'pr_avg',
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
    'AVG',
    'Long',
];

const mobilePuntingFields = new Set([
    'number_punts',
    'punt_avg',
    'long_punt',
]);

export {
    mobileTotalHeaders,
    mobilePassingHeaders,
    mobileRushingHeaders,
    mobileReceivingHeaders,
    mobileTackleHeaders,
    mobileDefToHeaders,
    mobileKickReturnHeaders,
    mobilePuntReturnHeaders,
    mobileKickingHeaders,
    mobilePuntingHeaders,
    mobileTotalFields,
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
