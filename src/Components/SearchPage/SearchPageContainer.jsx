import React from "react";
import SearchPage from "./SearchPage";
import {
    getTopNewsOnSearchOnPageThunk,
    getTopNewsOnSearchThunk, setSearchQuery
} from "../../redux/main-redux";
import {connect} from "react-redux";

class SearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.getTopNewsOnSearchThunk(this.props.searchQuery);
    }

    onPageChanged = (page) => {
        this.props.getTopNewsOnSearchOnPageThunk(this.props.searchQuery, this.props.pageSize, page);
    }

    render() {
        return <SearchPage {...this.props} onPageChanged={this.onPageChanged}/>
    }
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