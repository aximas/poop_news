import * as axios from "axios";

// const baseURLFromLocalhost = 'http://localhost:4000/api/v1/';
const baseURLFromWeb = 'https://murmuring-sierra-54875.herokuapp.com/api/v1/';

const instance = axios.create({
    baseURL: baseURLFromWeb,
    headers: {'Content-Type': 'application/json'}
});

export const API = {
    news: 'news',
    archive: 'archive',
    sources: 'sources',
    crypto: 'crypto'
}