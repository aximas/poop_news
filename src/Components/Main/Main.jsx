import React from "react";
import Post from "../Post/Post";
import Pagination from "../Pagination/Pagination";
import PageSelect from "../PageSelect/PageSelect";

const Main = (props) => {

    return <main className="main">

            {/*<select name="page-size" id="page-size" onChange={(e) => {*/}
            {/*    console.log(e.currentTarget.value)*/}
            {/*}}>*/}
            {/*    <option value="10" defaultValue>10</option>*/}
            {/*    <option value="20">20</option>*/}
            {/*    <option value="50">50</option>*/}
            {/*</select>*/}

        <PageSelect />
            <Post posts={props.data} classNameChanger={props.classNameChanger} />
            <Pagination totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        pageNum={props.pageNum}
                        onPageChanged={props.onPageChanged}
                        />
    </main>
}

export default Main;