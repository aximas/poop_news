import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setCategories, setSources} from "../../redux/category-redux";
import {setData} from "../../redux/main-redux";

class HeaderContainer extends React.Component {

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

    onCategoryChange() {
        axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data.sources);
                this.props.setSources(response.data.sources);
                this.props.setCategories([...new Set(this.getCategories(response.data.sources))]);
            })
    }

    render() {
        return <Header categories={this.props.categories}/>
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.sourcesData.categories
    }
}


export default connect(mapStateToProps, {setCategories, setSources, setData})(HeaderContainer);