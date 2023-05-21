import { TeamGameRecordData, TeamSeasonRecordData } from 'interfaces/Teams';
import { baseGet } from '../../baseApi';


export const getTeamGameRecords = async (): Promise<TeamGameRecordData> => {
    try {
        const response = await baseGet('/records/game/team');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};


export const getTeamSeasonRecords = async (): Promise<TeamSeasonRecordData> => {
    try {
        const response = await baseGet('/records/season/team');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
