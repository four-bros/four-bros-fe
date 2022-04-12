import { baseGet } from '../../baseApi';


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

export const getCoachRecords = async (): Promise<CoachRecordsData | void> => {
    try {
        const response = await baseGet('/coach');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
