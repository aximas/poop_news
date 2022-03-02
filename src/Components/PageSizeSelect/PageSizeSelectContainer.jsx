import React from "react";
import {connect} from "react-redux";
import PageSizeSelect from "./PageSizeSelect";
import {getAllNewOnPageSizeThunk} from "../../redux/main-redux";

class PageSizeSelectContainer extends React.Component {

    onPageSizeChanged = (pageSize, isEndpointTopHeadLines) => {
        this.props.getAllNewOnPageSizeThunk(pageSize, isEndpointTopHeadLines, this.props.category, this.props.pageNum)
    }

    render() {
        return <PageSizeSelect pageSizeOptions={this.props.pageSizeOptions} onPageSizeChanged={this.onPageSizeChanged}
                               pageSize={this.props.pageSize}/>
    }
}

const mapStateToProps = (state) => {
    return {
        pageSizeOptions: state.sourcesData.pageSizeOptions,
        pageSize: state.mainPage.pageSize,
        pageNum: state.mainPage.pageNum,
    }
}

export default connect(mapStateToProps, {getAllNewOnPageSizeThunk})(PageSizeSelectContainer)