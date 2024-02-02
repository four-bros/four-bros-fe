
const desktopOffenseHeaders = [
    'Team',
    'Games',
    'Total Yds',
    'Total YPG',
    'Points',
    'PPG',
    'Offense Yds',
    'Offense YPG',
    'Passing Yds',
    'Passing YPG',
    'Passing TDs',
    'Rushing Yds',
    'Rushing YPG',
    'Rushing TDs',
    'TOs'
]

const desktopOffenseFields = new Set([
    'games_played',
    'total_yards',
    'total_ypg',
    'total_points',
    'ppg',
    'off_yards',
    'off_ypg',
    'pass_yds',
    'pass_ypg',
    'pass_tds',
    'rush_yds',
    'rush_ypg',
    'rush_tds',
    'off_turnovers'
])

const desktopDefenseHeaders = [
    'Team',
    'Games',
    'Sacks',
    'TFL',
    'Pass Def',
    'INTs',
    'FF',
    'FR',
    'Safeties',
    'Blocks',
    'TDs',
]

const desktopDefenseFields = new Set([
    'games_played',
    'sacks',
    'tfl',
    'pass_def',
    'ints_made',
    'ff',
    'fr',
    'safeties',
    'blocked_kicks',
    'def_tds',
])

const desktopReturnHeaders = [
    'Team',
    'KR Yds',
    'KR TDs',
    'PR Yds',
    'PR TDS'
];

const desktopReturnFields = new Set([
    'kr_yds',
    'kr_tds',
    'pr_yds',
    'pr_tds'
]);

export {
    desktopOffenseHeaders,
    desktopDefenseHeaders,
    desktopOffenseFields,
    desktopDefenseFields,
    desktopReturnHeaders,
    desktopReturnFields
};
