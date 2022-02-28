import React from "react";
import SearchPage from "./SearchPage";
import {setCurrentPageNum, setData, setSearchQuery, setTotalCount} from "../../redux/main-redux";
import {connect} from "react-redux";
import newsApi from "../../api/api";

class SearchPageContainer extends React.Component {

    componentDidMount() {
        newsApi.getTopNewsSearch(this.props.searchQuery, this.props.pageSize, this.props.pageNum)
            .then(response => {
                this.props.setData(response.articles);
                this.props.setTotalCount(response.totalResults);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPageNum(page);
        newsApi.getTopNewsSearch(this.props.searchQuery, this.props.pageSize, page)
            .then(response => {
                this.props.setData(response.articles);
            });
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

export default connect(mapStateToProps, {setData, setSearchQuery, setTotalCount, setCurrentPageNum})(SearchPageContainer)