import { Team, TeamDetails, TeamRoster, TeamStats, UserTeamDetails, UserTeamsStats } from 'interfaces/Teams';
import { baseGet } from '../baseApi';
import { TeamPlayerStats } from 'interfaces/Stats';

export const getTeams = async (): Promise<Team[]> => {
    try {
        const response = await baseGet('/teams');
        return response.data.teams;
    } catch (err) {
        console.log(err);
        throw new Error('failed to get all teams');
    }
};

export const getTeamDetails = async (
    teamId: string
): Promise<TeamDetails> => {
    try {
        const response = await baseGet(`/teams/${teamId}/details`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team details');
    }
};

export const getUserTeamsDetails = async (): Promise<UserTeamDetails> => {
    try {
        const response = await baseGet('/teams/details/users');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team details');
    }
};

export const getTeamRoster = async (
    teamId: string
): Promise<TeamRoster> => {
    try {
        const response = await baseGet(`/teams/${teamId}/roster`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve roster');
    }
};

export const getTeamPlayerStats = async (
    teamId: string
): Promise<TeamPlayerStats> => {
    try {
        const response = await baseGet(`/teams/${teamId}/player/stats`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team player stats');
    }
};

export const getUserTeamsPlayerStats = async (): Promise<TeamPlayerStats> => {
    try {
        const response = await baseGet('/teams/player/stats/users');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team player stats');
    }
};

export const getTeamStats = async (
    teamId: string
): Promise<TeamStats> => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team stats');
    }
};

export const getUserTeamsStats = async (): Promise<UserTeamsStats> => {
    try {
        const response = await baseGet('/teams/stats/users');
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve user teams stats');
    }
};
