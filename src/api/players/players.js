import { baseGet } from '../baseApi';

export const getPlayer = async (id) => {
    try {
        const response = baseGet(`/players/${id}`);
        return response.data;
    } catch (err) {
        return err;
    }
};
