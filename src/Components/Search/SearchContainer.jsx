import React from "react";
import Search from "./Search";
import {setSearchQuery} from "../../redux/main-redux";
import {connect} from "react-redux";
import store from "../../redux/store"

class SearchContainer extends React.Component {
    render() {
        return <Search store={store} setSearchQuery={this.props.setSearchQuery} searchQuery={this.props.searchQuery} />
    }
}

const mapStateToProps = (state) => {
    return {
        searchQuery: state.mainPage.searchQuery
    }
}

export default connect(mapStateToProps, {setSearchQuery})(SearchContainer);