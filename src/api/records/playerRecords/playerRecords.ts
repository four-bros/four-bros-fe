import { baseGet } from '../../baseApi';
import { RecordsInfo } from '../../../interfaces/Stats';


export const getCareerRecords = async (): Promise<RecordsInfo> => {
    try {
        const response = await baseGet('/records/career');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getGameRecords = async (): Promise<RecordsInfo> => {
    try {
        const response = await baseGet('/records/game/player');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getSeasonRecords = async (): Promise<RecordsInfo> => {
    try {
        const response = await baseGet('/records/season/player');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getRecords = async (recordType: string, recordGroup: string): Promise<RecordsInfo> => {
    try {
        const response = await baseGet(`/records/${recordType}/${recordGroup}`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
