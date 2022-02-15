const SET_DATA = 'SET-DATA';
const SET_CURRENT_PAGE_NUM = 'SET-PAGE-NUM';
const SET_TOTAL_COUNT = 'SER-TOTAL-COUNT';

let initialState = {
    data: null,
    pageSize: 10,
    pageNum: 1,
    totalCount: 0,
    country: 'us',
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
        default: {
            return state
        }
    }
}

export const setData = (news) => ({type: SET_DATA, news});
export const setCurrentPageNum = (pageNum) => ({type: SET_CURRENT_PAGE_NUM, pageNum});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default mainReducer;