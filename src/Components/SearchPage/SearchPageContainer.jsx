import React from "react";
import SearchPage from "./SearchPage";
import axios from "axios";
import {setCurrentPageNum, setData, setSearchQuery, setTotalCount} from "../../redux/main-redux";
import {connect} from "react-redux";

class SearchPageContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?q=${this.props.searchQuery}&pageSize=${this.props.pageSize}&page=${this.props.pageNum}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.props.setData(response.data.articles);
                this.props.setTotalCount(response.data.totalResults);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPageNum(page);
        axios.get(`https://newsapi.org/v2/top-headlines?q=${this.props.searchQuery}&pageSize=${this.props.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.props.setData(response.data.articles);
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