import React from "react";
import Post from "../Post/Post";
import Pagination from "../Pagination/Pagination";
import PageSizeSelectContainer from "../PageSizeSelect/PageSizeSelectContainer";
import SearchContainer from "../Search/SearchContainer";

const Main = (props) => {

    return <main className="main d-flex d-flex-d-column">
            <div className="widgets-wrapper d-flex">
                <SearchContainer />
                <PageSizeSelectContainer />
            </div>
            <Post posts={props.data} classNameChanger={props.classNameChanger} />
            <Pagination totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        pageNum={props.pageNum}
                        onPageChanged={props.onPageChanged}
                        />
    </main>
}

export default Main;