import React, {useEffect} from "react";
import SearchPage from "./SearchPage";
import {
    getTopNewsOnSearchOnPageThunk,
    getTopNewsOnSearchThunk, setSearchQuery
} from "../../redux/main-redux";
import {connect} from "react-redux";
import {useParams} from "react-router";

const SearchPageContainer = (props) => {

    const {searchQueryId} = useParams();
    useEffect(() => {
        props.setSearchQuery(searchQueryId);
        props.getTopNewsOnSearchThunk(searchQueryId);
    }, [searchQueryId]);

    const onPageChanged = (page) => {
        props.getTopNewsOnSearchOnPageThunk(props.searchQuery, props.pageSize, page);
    }

    return <SearchPage {...props} onPageChanged={onPageChanged}/>
}

const mapStateToProps = (state) => {
    return {
        searchQuery: state.mainPage.searchQuery,
        data: state.mainPage.data,
        pageSize: state.mainPage.pageSize,
        pageNum: state.mainPage.pageNum,
        totalCount: state.mainPage.totalCount,
    }
}

export default connect(mapStateToProps, {
    setSearchQuery,
    getTopNewsOnSearchThunk,
    getTopNewsOnSearchOnPageThunk
})(SearchPageContainer)