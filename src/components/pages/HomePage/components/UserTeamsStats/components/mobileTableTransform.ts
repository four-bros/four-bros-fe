
const mobileTotalOffHeaders = [
    'Team',
    'Yards',
    'YPG',
    'Points',
    'PPG',
    'TOs'
]

const mobileTotalOffFields = new Set([
    'total_yards',
    'total_ypg',
    'total_points',
    'ppg',
    'off_turnovers'
])

const mobileOffenseHeaders = [
    'Team',
    'Yards',
    'Pass Yds',
    'Pass YPG',
    'Rush Yds',
    'Rush YPG'
]

const mobileOffenseFields = new Set([
    'off_yards',
    'pass_yds',
    'pass_ypg',
    'rush_yds',
    'rush_ypg'
])

const mobileDefenseHeaders = [
    'Team',
    'Games',
    'Sacks',
    'TFL',
    'INTs',
    'FF',
    'FR',
    'TDs',
]

const mobileDefenseFields = new Set([
    'games_played',
    'sacks',
    'tfl',
    'ints_made',
    'ff',
    'fr',
    'def_tds',
])

const mobileReturnHeaders = [
    'Team',
    'KR Yds',
    'KR TDs',
    'PR Yds',
    'PR TDS'
];

const mobileReturnFields = new Set([
    'kr_yds',
    'kr_tds',
    'pr_yds',
    'pr_tds'
]);

export {
    mobileDefenseHeaders,
    mobileReturnHeaders,
    mobileDefenseFields,
    mobileReturnFields,
    mobileTotalOffHeaders,
    mobileTotalOffFields,
    mobileOffenseFields,
    mobileOffenseHeaders
};
