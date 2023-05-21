import { baseGet } from '../baseApi';
import { Team } from '../../interfaces/Teams';

export interface UserTeams {
    user_teams: Team[];
    week_year: {
        week: number;
        year: number;
    };
}

export const getUserTeams = async (): Promise<UserTeams | void> => {
    try {
        const response = await baseGet('/home/');
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
