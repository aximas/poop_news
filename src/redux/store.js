import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./main-redux";
import categoryReducer from "./category-redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPage: mainReducer,
    sourcesData: categoryReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store;