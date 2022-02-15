import React from "react";
import "./Preloader.scss";
import preloaderSrc from "../../files/img/Dual Ring-1s-200px.svg";

const Preloader = () => {
    return <img src={preloaderSrc} alt="preloader" className="preloader"/>
}

export default Preloader;