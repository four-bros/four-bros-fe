import axios from 'axios';

const baseURL = 'https://four-bros-be.herokuapp.com';

export const baseGet = (endpoint: string) => {
    return axios.get(`${baseURL}${endpoint}`);
};
