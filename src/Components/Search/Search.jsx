import React from "react";
import searchImgSrc from "../../files/img/search.png";
import "./Search.scss";
import {useNavigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Search = (props) => {
    let navigate = useNavigate();

    const submitted = (values) => {
        navigate(`/search/${values.searchQuery}`, {replace: true})
    }
    return <SearchForm onSubmit={submitted} />
}

let SearchForm = (props) => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit} className="search-wrapper d-flex">
        <Field placeholder="Search" component="input" type="search" className="search-input" name="searchQuery"/>
        <button className="search-submit"><img src={searchImgSrc} alt="search-img" className="search-img"/></button>
    </form>
}

SearchForm = reduxForm({form: "SearchForm"})(SearchForm)

export default Search;