import React from "react";
import Popup from "reactjs-popup";
import "./PopUp.scss"
import imgPlaceholder from "../../files/img/img_placeholder.png";

const PopUpNews = (props) => {
   return <Popup trigger={<h3 className="post-title"> {props.title} </h3>} modal nested>
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header"> {props.title} </div>
                <div className="content">
                    {' '}
                    {props.content ?? props.description}
                    <img src={props.image_url ?? imgPlaceholder} alt="post-thumbnail" className="modal-post-thumbnail"/>
                </div>
            </div>
        )}
    </Popup>
}

export default PopUpNews