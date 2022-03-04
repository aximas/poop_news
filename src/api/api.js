import * as axios from "axios";

const baseURLFromLocalhost = 'http://localhost/test-to-fetch/';
const baseURLFromWeb = 'https://aximasnewsapi.herokuapp.com/';

const instance = axios.create({
    baseURL: baseURLFromLocalhost,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

const newsApi = {
    getTopNews: (category = 'general', pageSize = 10, pageNum = 1) => {
        return instance.get(`?action=rpn&type=top-news&category=${category}&country=us&pageSize=${pageSize}&page=${pageNum}`)
            .then(response => response.data)
    },
    getEveryNews: (pageSize = 10, pageNum = 1, sources = 'cnn') => {
        return instance.get(`?action=rpn&type=everything&sources=${sources}&pageSize=${pageSize}&page=${pageNum}`)
            .then(response => response.data)
    },
    getSources: () => {
        return instance.get(`?action=rpn&type=sources`)
            .then(response => response.data)
    },
    getTopNewsSearch: (searchQuery, pageSize = 10, pageNum = 1) => {
        return instance.get(`?action=rpn&type=search-in-top&searchQuery=${searchQuery}&pageSize=${pageSize}&page=${pageNum}`)
            .then(response => response.data)
    }
}

export default newsApi;