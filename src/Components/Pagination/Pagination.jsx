import React from "react";
import './Pagination.scss';

const Pagination = (props) => {

    let pagesNum = Math.round(props.totalCount / props.pageSize) > 10 ? 10 : Math.round(props.totalCount / props.pageSize);

    const pagesNumArr = () => {
        return new Array(pagesNum).fill(1).map((num, i) => num + i)
    }

    const paginationNum = pagesNumArr().map(num => {
        return props.pageNum === num ? <span key={num} className="pagination-number pagination-number-current">{num}</span> : <span key={num} className="pagination-number" onClick={() => props.onPageChanged(num)}>{num}</span>

    })

    return <nav className="posts-pagination pagination">
        {paginationNum}
    </nav>
}

export default Pagination;