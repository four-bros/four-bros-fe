import { baseGet } from '../baseApi';

export const getTeams = async () => {
    try {
        const response = await baseGet('/teams');
        return response.data.teams;
    } catch (err) {
        return err;
    }
};

export const getSingleTeam = async (teamId) => {
    try {
        const response = await baseGet(`/teams/${teamId}`);
        return response.data;
    } catch (err) {
        return err;
    }
};

export const getSingleTeamLeaders = async (teamId) => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats`);
        return response.data;
    } catch (err) {
        return err;
    }
};
