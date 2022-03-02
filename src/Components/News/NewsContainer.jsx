import React from "react";
import {connect} from "react-redux";
import {
    getEveryNewsThunk,
    getEveryNewsOnPageThunk
} from "../../redux/main-redux";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getEveryNewsThunk()
    }

    onPageChanged = (page) => {
        this.props.getEveryNewsOnPageThunk(page, this.props.pageSize);
    }

    render() {
        return <News data={this.props.data}
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

export default connect(mapStateToProps, {getEveryNewsThunk, getEveryNewsOnPageThunk})(NewsContainer);