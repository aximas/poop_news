import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setCategories, setSources} from "../../redux/category-redux";
import {setCategory, setCurrentPageNum, setData, setTotalCount} from "../../redux/main-redux";
import newsApi from "../../api/api";

class HeaderContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    componentDidMount() {
        newsApi.getSources()
            .then(response => {
                this.props.setSources(response.sources);
                this.props.setCategories([...new Set(this.getCategories(response.sources))]);
            })
    }

    getCategories(sources) {
        return sources.map((item) => item.category);
    }

    onCategoryChange(category) {
        this.props.setCategory(category);
        newsApi.getTopNews(category, this.props.pageSize, 1)
            .then(response => {
                this.props.setData(response.articles);
                this.props.setTotalCount(response.totalResults);
                this.props.setCurrentPageNum(1);
            })
    }

    render() {
        return <Header categories={this.props.categories} onCategoryChange={this.onCategoryChange} category={this.props.category}/>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.sourcesData.categories,
        category: state.mainPage.category,
        pageSize: state.mainPage.pageSize,
    }
}


export default connect(mapStateToProps, {setCategories, setSources, setData, setCategory, setTotalCount, setCurrentPageNum})(HeaderContainer);