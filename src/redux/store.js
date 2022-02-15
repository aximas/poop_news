import {combineReducers, createStore} from "redux";
import mainReducer from "./main-redux";
import categoryReducer from "./category-redux";

let reducers = combineReducers({
    mainPage: mainReducer,
    sourcesData: categoryReducer
})

let store = createStore(reducers)

window.store = store;

export default store;