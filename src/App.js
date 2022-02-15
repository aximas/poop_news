import React from "react";
import './App.scss';
import MainContainer from "./Components/Main/MainContainer";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NewsContainer from "./Components/News/NewsContainer";

function App() {
    return (
        <div className="app">
            <HeaderContainer />
            <div className="main-wrapper">
                <Routes>
                    <Route path='/' element={<MainContainer />}/>
                    <Route path='/everything' element={<NewsContainer />}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
