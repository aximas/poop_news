import React from "react";
import {connect} from "react-redux";
import PageSizeSelect from "./PageSizeSelect";
import axios from "axios";
import {setData, setPageSize} from "../../redux/main-redux";

class PageSizeSelectContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onPageSizeChanged = this.onPageSizeChanged.bind(this);
    }

    onPageSizeChanged(pageSize, isEndpointTopHeadLines) {
        this.props.setPageSize(pageSize);
        if (isEndpointTopHeadLines) {
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${this.props.pageNum}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    this.props.setData(response.data.articles);
                });
        }
        else {
            axios.get(`https://newsapi.org/v2/everything?sources=CNN,ABC,WDRB,daily&language=en&pageSize=${pageSize}&page=${this.props.pageNum}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    this.props.setData(response.data.articles);
                });
        }
    }

    render() {
        return <PageSizeSelect pageSizeOptions={this.props.pageSizeOptions} onPageSizeChanged={this.onPageSizeChanged} pageSize={this.props.pageSize}/>
    }
}

const mapStateToProps = (state) => {
    return {
        pageSizeOptions: state.sourcesData.pageSizeOptions,
        pageSize: state.mainPage.pageSize,
        pageNum: state.mainPage.pageNum,
    }
}

export default connect(mapStateToProps, {setData, setPageSize})(PageSizeSelectContainer)