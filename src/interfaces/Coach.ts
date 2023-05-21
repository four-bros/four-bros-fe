
export type CoachSeasonRecord = {
    losses: number,
    national_title: boolean,
    team_id: number,
    team_name: string,
    wins: number,
    year: number
}

export type CoachData = {
    losses: number,
    name: string,
    season_records: CoachSeasonRecord[],
    titles: number,
    wins: number
}

export type CoachRecordsData = {
    ben: CoachData,
    brent: CoachData,
    dan: CoachData,
    seth: CoachData
}