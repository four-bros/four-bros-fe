import { baseGet } from '../baseApi';
import { TeamDetails } from 'api/teams';


export interface RankingsInfo {
    bcs: TeamDetails[],
    coachs_poll: TeamDetails[],
    media_poll: TeamDetails[]
}


export const getRankings = async (): Promise<RankingsInfo | void> => {
    try {
        const response = await baseGet('/rankings/');
        return response.data;
    } catch (err) {
        console.log(err)
    }
};
