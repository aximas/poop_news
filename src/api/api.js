import * as axios from "axios";

// const baseURLFromLocalhost = 'http://localhost:4000/api/v1/';
const baseURLFromWeb = 'https://murmuring-sierra-54875.herokuapp.com/api/v1/';

const instance = axios.create({
    baseURL: baseURLFromWeb,
    headers: {'Content-Type': 'application/json'}
});

const newsApi = {
    getTopNews: (category = 'general', pageSize = 10, pageNum = 1) => {
        return instance.get(`news`)
            .then(response => response.data)
    },
    getEveryNews: (pageSize = 10, pageNum = 1, sources = 'cnn') => {
        return instance.get(`?action=rpn&type=everything&sources=${sources}&pageSize=${pageSize}&page=${pageNum}`)
            .then(response => response.data)
    },
    getSources: () => {
        return instance.get(`sources`)
            .then(response => response.data)
    },
    getTopNewsSearch: (searchQuery, pageSize = 10, pageNum = 1) => {
        return instance.get(`?action=rpn&type=search-in-top&searchQuery=${searchQuery}&pageSize=${pageSize}&page=${pageNum}`)
            .then(response => response.data)
    }
}

export default newsApi;