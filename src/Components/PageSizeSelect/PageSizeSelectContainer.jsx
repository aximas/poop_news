import React from "react";
import {connect} from "react-redux";
import PageSizeSelect from "./PageSizeSelect";
import {setData, setPageSize} from "../../redux/main-redux";
import newsApi from "../../api/api";

class PageSizeSelectContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onPageSizeChanged = this.onPageSizeChanged.bind(this);
    }

    onPageSizeChanged(pageSize, isEndpointTopHeadLines) {
        this.props.setPageSize(pageSize);
        if (isEndpointTopHeadLines) {
            newsApi.getTopNews(this.props.category, pageSize, this.props.pageNum)
                .then(response => {
                    this.props.setData(response.articles);
                });
        }
        else {
            newsApi.getEveryNews(pageSize, this.props.pageNum)
                .then(response => {
                    this.props.setData(response.articles);
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