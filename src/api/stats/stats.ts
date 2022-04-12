import { baseGet } from '../baseApi';

import { RecordsInfo } from 'api/records/playerRecords';

 export const getSeasonLeaders = async (): Promise<RecordsInfo | void> => {
    try {
        const response = await baseGet('/stats/season/leaders/players');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
