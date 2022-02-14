import React from "react";
import "./Header.scss";
import logoSrc from "../../files/img/logo.png";

const Header = () => {
    return <header className="header d-flex d-flex-y-center">
        <a href="/">
            <img src={logoSrc} alt="logo" className="logo header-logo"/>
        </a>
        <ul className="menu header-menu d-flex">
            <li className="menu-item">
                <a href="#" className="menu-item-link">
                    Characters
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-item-link">
                    Comics
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-item-link">
                    Creators
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-item-link">
                    Events
                </a>
            </li>
        </ul>
    </header>
}

export default Header;