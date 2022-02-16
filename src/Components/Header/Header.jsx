import React from "react";
import "./Header.scss";
import logoSrc from "../../files/img/logo.png";
import {useLocation} from "react-router-dom";
import PopUpNews from "../PopUp/PopUp";

const Header = (props) => {

    const {pathname} = useLocation();

    const category = props.categories.map((category, i) => (
             <li className="menu-item" key={i}> {/*// about ket attr, yes I know, it isn't right, but in this case it doesn't matter*/}
                <span className={`menu-item-link ${props.category === category ? "menu-item-link-current" : ""} `} onClick={() => {
                    console.log(category);
                    if(props.category !== category) {
                        props.onCategoryChange(category)
                    }
                }}>
                    {category}
                </span>
            </li>
    ))


    return <header className="header d-flex d-flex-y-center">
        <a href="/">
            <img src={logoSrc} alt="logo" className="logo header-logo"/>
        </a>
        <div className="site-menu">
            <ul className="menu-upper-bar upper-menu d-flex">
                <li className="upper-menu-item">
                    <a href="/everything" className="upper-menu-item-link">
                        Everything
                    </a>
                </li>
                <li className="upper-menu-item">
                    <a href="/" className="upper-menu-item-link">
                        Top news
                    </a>
                </li>
            </ul>
            <ul className="menu header-menu d-flex">
                {pathname === '/' ? category : null}
            </ul>
        </div>
        <PopUpNews />
    </header>
}

export default Header;