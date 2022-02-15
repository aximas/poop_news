import React from "react";
import Post from "../Post/Post";
import Pagination from "../Pagination/Pagination";

const News = (props) => {
    return <main className="main">
        <Post posts={props.data} classNameChanger={props.classNameChanger} />
        <Pagination totalCount={props.totalCount}
                    pageSize={props.pageSize}
                    pageNum={props.pageNum}
                    onPageChanged={props.onPageChanged}
        />
    </main>
}

export default News;