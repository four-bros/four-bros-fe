import { baseGet } from '../baseApi';

export const getPlayer = async (id: string) => {
    try {
        const response = await baseGet(`/players/${id}`);
        return response.data;
    } catch (err) {
        return err;
    }
};
