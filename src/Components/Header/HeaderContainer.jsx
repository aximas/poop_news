import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setSourcesThunk} from "../../redux/category-redux";
import {setSourceOnCategoryChangeThunk} from "../../redux/main-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setSourcesThunk();
    }

    onCategoryChange = (category) => {
        this.props.setSourceOnCategoryChangeThunk(category, this.props.pageSize);
    }

    render() {
        return <Header categories={this.props.categories} onCategoryChange={this.onCategoryChange}
                       category={this.props.category}/>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.sourcesData.categories,
        category: state.mainPage.category,
        pageSize: state.mainPage.pageSize,
    }
}


export default connect(mapStateToProps, {
    setSourcesThunk,
    setSourceOnCategoryChangeThunk
})(HeaderContainer);