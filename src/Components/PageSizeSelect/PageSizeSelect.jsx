import React from "react";
import Select from "react-select";
import "./PageSelect.scss"

const PageSelect = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const MyComponent = () => (
        <Select options={options} onChange={(e) => console.log(e.value)} className="page-size" />
    )

    return MyComponent()
}

export default PageSelect