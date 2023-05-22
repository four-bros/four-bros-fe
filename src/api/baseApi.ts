import axios from 'axios';

// const baseURL = 'https://four-bros-be.herokuapp.com';
const baseURL = 'http://localhost:8000';

export const baseGet = (endpoint: string) => {
    return axios.get(`${baseURL}${endpoint}`);
};
