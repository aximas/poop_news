const SET_CATEGORIES = 'SET-CATEGORIES';
const SET_SOURCES = 'SET-SOURCES';

let initialState = {
    sources: [],
    categories: [],
    pageSizeOptions: [{value: 10, label: 10}, {value: 20, label: 20}, {value: 50, label: 50}]
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SOURCES:
            return {
                ...state, sources: action.sources
            }
        case SET_CATEGORIES:
            return {
                ...state, categories: action.categories
            }
        default:
            return ({...state})
    }
}

export const setSources = (sources) => ({type: SET_SOURCES, sources})
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories})

export default categoryReducer;