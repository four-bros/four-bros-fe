import { CoachRecordsData } from 'interfaces/Coach';
import { baseGet } from '../../baseApi';


export const getCoachRecords = async (): Promise<CoachRecordsData> => {
    try {
        const response = await baseGet('/coach');
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
