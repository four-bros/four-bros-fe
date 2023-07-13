import {
    Team,
    TeamDetails,
    TeamRoster,
    TeamStats,
    TeamGameStats
} from 'interfaces/Teams';
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

export const getTeamGameStats = async (
    teamId: string
): Promise<TeamGameStats> => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats/game`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team game stats');
    }
};

export const getTeamPlayerStats = async (
    teamId: string
): Promise<TeamPlayerStats> => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats/player`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team player stats');
    }
};

export const getTeamSeasonStats = async (
    teamId: string
): Promise<TeamStats> => {
    try {
        const response = await baseGet(`/teams/${teamId}/stats/season`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to retrieve team season stats');
    }
};
