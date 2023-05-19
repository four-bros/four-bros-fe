import { baseGet } from '../baseApi';
import { TeamDetails } from '../../interfaces/Teams';


export interface RankingsInfo {
    bcs: TeamDetails[],
    coachs_poll: TeamDetails[],
    media_poll: TeamDetails[]
}


export const getRankings = async (): Promise<RankingsInfo> => {
    try {
        const response = await baseGet('/rankings/');
        return response.data;
    } catch (err) {
        console.log(err)
        throw new Error('unable to retrieve team rankings');
    }
};
