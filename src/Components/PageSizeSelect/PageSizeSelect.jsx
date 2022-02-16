import React from "react";
import Select from "react-select";
import "./PageSizeSelect.scss"
import {useLocation} from "react-router-dom";

const PageSizeSelect = (props) => {

    const {pathname} = useLocation();

    return <div className="page-size-select-wrapper d-flex d-flex-y-center">
        <h4 className="page-size-select-title">Per news in page</h4>
        <Select options={props.pageSizeOptions} defaultValue={props.pageSizeOptions[0]} onChange={(e) => {
            (pathname === '/') ? props.onPageSizeChanged(e.value, true) : props.onPageSizeChanged(e.value, false);
        }} className="page-size-select"/>
    </div>
}

export default PageSizeSelect