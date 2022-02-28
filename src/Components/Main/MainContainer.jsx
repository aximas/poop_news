import React from "react";
import {connect} from "react-redux";
import Main from "./Main";
import {setData, setCurrentPageNum, setTotalCount} from "../../redux/main-redux";
import newsApi from "../../api/api";

class MainContainer extends React.Component {
    componentDidMount() {
        newsApi.getTopNews(this.props.category, this.props.pageSize, this.props.pageNum)
            .then(response => {
                console.log(response.articles);
                this.props.setData(response.articles);
                this.props.setTotalCount(response.totalResults);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPageNum(page);
        newsApi.getTopNews(this.props.category, this.props.pageSize, page)
            .then(response => {
                this.props.setData(response.articles);
            });
    }

    render() {
        return <Main data={this.props.data}
                     classNameChanger={this.classNameChanger}
                     pageSize={this.props.pageSize}
                     totalCount={this.props.totalCount}
                     pageNum={this.props.pageNum}
                     onPageChanged={this.onPageChanged}
        />;
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.mainPage.data,
        pageSize: state.mainPage.pageSize,
        pageNum: state.mainPage.pageNum,
        country: state.mainPage.country,
        totalCount: state.mainPage.totalCount,
        category: state.mainPage.category
    }
}

export default connect(mapStateToProps, {setData, setCurrentPageNum, setTotalCount})(MainContainer)