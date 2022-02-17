import React, {useState} from "react";
import Post from "../Post/Post";
import {useParams} from "react-router";
import Pagination from "../Pagination/Pagination";

const SearchPage = (props) => {

    const {searchQueryId} = useParams();

    props.setSearchQuery(searchQueryId);

    return (
        <main className="main d-flex d-flex-d-column">
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