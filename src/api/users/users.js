import { baseGet } from '../baseApi';

export const getUserTeams = async () => {
    try {
        const response = await baseGet('/users');
        console.log(response.data)
        return response.data;
    } catch (err) {
        return err;
    }
};
