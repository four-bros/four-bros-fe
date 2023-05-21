import { baseGet } from '../baseApi';
import { PlayerHofStructure, PlayerStatsStructure } from 'interfaces/Player';


export const getHofPlayers = async (): Promise<PlayerHofStructure[] | void> => {
    try {
        const response = await baseGet('/players/hof');
        return response.data.players;
    } catch (err) {
        console.log(err);
        throw new Error('unable to retrieve HOF');
    }
};

export const getPlayer = async (id: string): Promise<PlayerStatsStructure> => {
    try {
        const response = await baseGet(`/players/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error('unable to retrieve player stats');
    }
};
