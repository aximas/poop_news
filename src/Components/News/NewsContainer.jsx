import React from "react";
import {connect} from "react-redux";
import {setData, setCurrentPageNum, setTotalCount} from "../../redux/main-redux";
import News from "./News";
import newsApi from "../../api/api";

class NewsContainer extends React.Component {
    componentDidMount() {
        newsApi.getEveryNews(this.props.pageSize, this.props.pageNum)
            .then(response => {
                this.props.setData(response.articles);
                this.props.setTotalCount(response.totalResults);
            });
    }

    classNameChanger = (keys, key) => {
        return function (selector) {
            return (keys.length > 0 && keys.includes(key)) ? selector : '';
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPageNum(page);
        newsApi.getEveryNews(this.props.pageSize, page)
            .then(response => {
                this.props.setData(response.articles);
            });
    }

    render() {
        return <News data={this.props.data}
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
    }
}

export default connect(mapStateToProps, {setData, setCurrentPageNum, setTotalCount})(NewsContainer);