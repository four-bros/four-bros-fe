import { baseGet } from '../baseApi';
import { Team } from '../../interfaces/Teams';

export interface UserTeams {
    user_teams: Team[];
    week_year: {
        week: number;
        year: number;
    };
}

export const getUserTeams = async (): Promise<UserTeams> => {
    try {
        const response = await baseGet('/home/');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('unable to retrieve user teams')
    }
};
