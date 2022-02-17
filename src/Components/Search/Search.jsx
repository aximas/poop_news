import React from "react";
import searchImgSrc from "../../files/img/search.png";
import "./Search.scss";
import {Link} from "react-router-dom";

const Search = (props) => {

    return <div className="search-wrapper d-flex">
        <input placeholder="Search" type="search" className="search-input" onChange={(e) => {
            props.setSearchQuery(e.currentTarget.value);
        }}/>
        <Link to={"/search/" + props.searchQuery} className="search-submit"><img src={searchImgSrc} alt="search-img" className="search-img"/></Link>
    </div>
}

export default Search;