import newsApi from "../api/api";

const SET_DATA = 'SET-DATA';
const SET_CURRENT_PAGE_NUM = 'SET-PAGE-NUM';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const SET_CATEGORY = 'SET-CATEGORY';
const SET_SEARCH_QUERY = 'SET-SEARCH-QUERY';

let initialState = {
    data: null,
    pageSize: 10,
    pageNum: 1,
    totalCount: 0,
    country: 'us',
    category: 'general',
    searchQuery: ''
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state, data: action.news
            }
        case SET_CURRENT_PAGE_NUM:
            return {
                ...state, pageNum: action.pageNum
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_PAGE_SIZE:
            return {
                ...state, pageSize: action.pageSize
            }
        case SET_CATEGORY:
            return {
                ...state, category: action.category
            }
        case SET_SEARCH_QUERY:
            return {
                ...state, searchQuery: action.searchQuery
            }
        default: {
            return state
        }
    }
}

export const setData = (news) => ({type: SET_DATA, news});
export const setCurrentPageNum = (pageNum) => ({type: SET_CURRENT_PAGE_NUM, pageNum});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setCategory = (category) => ({type: SET_CATEGORY, category});
export const setSearchQuery = (searchQuery) => ({type: SET_SEARCH_QUERY, searchQuery});

export const getTopNewsThunk = () => (dispatch) => {
    return newsApi.getTopNews()
        .then(response => {
            dispatch(setData(response.articles));
            dispatch(setTotalCount(response.totalResults));
        });
}

export const getTopNewsOnPageThunk = (category, pageSize, page) => (dispatch) => {
    dispatch(setCurrentPageNum(page));
    return newsApi.getTopNews(category, pageSize, page)
        .then(response => {
            dispatch(setData(response.articles));
        });
}

export const setSourceOnCategoryChangeThunk = (category, pageSize) => (dispatch) => {
    dispatch(setCategory(category));
    newsApi.getTopNews(category, pageSize, 1)
        .then(response => {
            dispatch(setData(response.articles));
            dispatch(setTotalCount(response.totalResults));
            dispatch(setCurrentPageNum(1));
        })
}

export const getEveryNewsThunk = () => (dispatch) => {
    newsApi.getEveryNews()
        .then(response => {
            dispatch(setData(response.articles));
            dispatch(setTotalCount(response.totalResults));
        });
}

export const getEveryNewsOnPageThunk = (page, pageSize) => (dispatch) => {
    dispatch(setCurrentPageNum(page));
    newsApi.getEveryNews(pageSize, page)
        .then(response => {
            dispatch(setData(response.articles));
        });
}

export const getTopNewsOnSearchThunk = (searchQuery) => (dispatch) => {
    newsApi.getTopNewsSearch(searchQuery)
        .then(response => {
            dispatch(setData(response.articles));
            dispatch(setTotalCount(response.totalResults));
        })
}

export const getTopNewsOnSearchOnPageThunk = (searchQuery, pageSize, page) => (dispatch) => {
    dispatch(setCurrentPageNum(page));
    newsApi.getTopNewsSearch(searchQuery, pageSize, page)
        .then(response => {
            dispatch(setData(response.articles));
        });
}

export const getAllNewOnPageSizeThunk = (pageSize, isEndpointTopHeadLines, category, pageNum) => (dispatch) => {
    dispatch(setPageSize(pageSize));
    if (isEndpointTopHeadLines) {
        newsApi.getTopNews(category, pageSize, pageNum)
            .then(response => {
                dispatch(setData(response.articles));
            });
    }
    else {
        newsApi.getEveryNews(pageSize, pageNum)
            .then(response => {
                dispatch(setData(response.articles));
            });
    }
}

export default mainReducer;