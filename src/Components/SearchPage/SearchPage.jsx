import React from "react";
import Post from "../Post/Post";
import {useParams} from "react-router";
import Pagination from "../Pagination/Pagination";
import SearchContainer from "../Search/SearchContainer";

const SearchPage = (props) => {

    return (
        <main className="main d-flex d-flex-d-column">
            <div className="widgets-wrapper d-flex">
                <SearchContainer/>
            </div>
         <Post posts={props.data} />
            <Pagination totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        pageNum={props.pageNum}
                        onPageChanged={props.onPageChanged}
            />
        </main>

    )
}

export default SearchPage;