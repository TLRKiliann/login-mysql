import axios from 'axios';

export const app = axios.create({
    timeout: 1000,
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: false
});