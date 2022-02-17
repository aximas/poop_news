import React from "react";
import './App.scss';
import MainContainer from "./Components/Main/MainContainer";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NewsContainer from "./Components/News/NewsContainer";
import SearchPageContainer from "./Components/SearchPage/SearchPageContainer";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
    return (
        <div className="app">
            <HeaderContainer/>
            <div className="main-wrapper">
                <Routes>
                    <Route path='/' element={<MainContainer/>}/>
                    <Route path='/everything' element={<NewsContainer/>}/>
                    <Route path='/search/:searchQueryId/*' element={<SearchPageContainer />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
