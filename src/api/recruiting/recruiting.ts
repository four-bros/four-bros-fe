import { CommitInfo } from 'interfaces/Commits';
import { baseGet } from '../baseApi';


export const getRecruits = async (): Promise<CommitInfo> => {
    try {
        const response = await baseGet('/commits/');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('unable to retrieve commits')
    }
}
