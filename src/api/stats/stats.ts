import { RecordsInfo } from 'interfaces/Stats';
import { baseGet } from '../baseApi';

 export const getSeasonLeaders = async (): Promise<RecordsInfo> => {
    try {
        const response = await baseGet('/stats/season/leaders/players');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('unable to retrieve season leaders');
    }
};
