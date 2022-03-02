import React from "react";
import {connect} from "react-redux";
import Main from "./Main";
import {
    getTopNewsThunk,
    getTopNewsOnPageThunk
} from "../../redux/main-redux";

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getTopNewsThunk();
    }

    onPageChanged = (page) => {
        this.props.getTopNewsOnPageThunk(this.props.category, this.props.pageSize, page);
    }

    render() {
        return <Main data={this.props.data}
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

export default connect(mapStateToProps, {
    getTopNewsThunk,
    getTopNewsOnPageThunk
})(MainContainer)