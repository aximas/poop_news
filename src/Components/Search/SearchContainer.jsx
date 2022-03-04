import React from "react";
import Search from "./Search";
import {setSearchQuery} from "../../redux/main-redux";
import {connect} from "react-redux";

class SearchContainer extends React.Component {
    render() {
        return <Search setSearchQuery={this.props.setSearchQuery} searchQuery={this.props.searchQuery} />
    }
}

const mapStateToProps = (state) => {
    return {
        searchQuery: state.mainPage.searchQuery
    }
}

export default connect(mapStateToProps, {setSearchQuery})(SearchContainer);