import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setCategories, setSources} from "../../redux/category-redux";
import {setCategory, setCurrentPageNum, setData, setTotalCount} from "../../redux/main-redux";

class HeaderContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data.sources);
                this.props.setSources(response.data.sources);
                this.props.setCategories([...new Set(this.getCategories(response.data.sources))]);
            })
    }

    getCategories(sources) {
        return sources.map((item) => item.category);
    }

    onCategoryChange(category) {
        this.props.setCategory(category);
        axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=${this.props.pageSize}&page=1&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data.articles);
                this.props.setData(response.data.articles);
                this.props.setTotalCount(response.data.totalResults);
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