import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setData, setCurrentPageNum, setTotalCount} from "../../redux/main-redux";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://newsapi.org/v2/everything?sources=CNN,ABC,WDRB,daily&language=en&pageSize=${this.props.pageSize}&page=${this.props.pageNum}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.props.setData(response.data.articles);
                this.props.setTotalCount(response.data.totalResults);
            });
    }

    classNameChanger = (keys, key) => {
        return function (selector) {
            return (keys.length > 0 && keys.includes(key)) ? selector : '';
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPageNum(page);
        axios.get(`https://newsapi.org/v2/everything?sources=CNN,ABC,WDRB,daily&language=en&pageSize=${this.props.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.props.setData(response.data.articles);
            });
    }

    render() {
        return <News data={this.props.data}
                     classNameChanger={this.classNameChanger}
                     pageSize={this.props.pageSize}
                     totalCount={this.props.totalCount}
                     pageNum={this.props.pageNum}
                     onPageChanged={this.onPageChanged}
                     onEndpointsChanged={this.onEndpointsChanged}
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