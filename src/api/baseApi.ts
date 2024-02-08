import axios from 'axios';

const baseUrl = 'https://four-bros-be.herokuapp.com';

export const baseGet = (endpoint: string) => {
    return axios.get(`${baseUrl}${endpoint}`);
};
