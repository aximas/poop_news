import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import "./Post.scss"
import PopUpNews from "../PopUp/PopUp";
import imgPlaceholder from "../../files/img/img_placeholder.png";

const Post = (props) => {
    if (!props.posts) {
        return (
            <Preloader/>
        )
    }
    const post = props.posts.map((post, i) => {
        return <article className={`d-flex d-flex-d-column post`} key={i}>
            <PopUpNews {...post}>
                {post.title}
            </PopUpNews>
            <div className="post-body">
                <p className="post-description">
                    {post.description}
                </p>
            </div>
            <img src={post.image_url ?? imgPlaceholder} alt={post.title} className={`post-thumbnail`}/>
            <div className="post-footer">
                <span className="post-footer-info post-author">
                    {post.author ? post.author + " - " : null}
                </span>
                <span className="post-footer-info post-source">
                   "{post.source_id}"
                </span>
                <span className="post-footer-info post-delimiter">
                   /
                </span>
                <span className="post-footer-info post-published-data">
                    <time className="post-published-date" dateTime={post.pubDate}>{post.pubDate.split(' ')[0]}</time>
                    <time className="post-published-time" dateTime={post.pubDate}>{post.pubDate.split(' ')[1]}</time>
                </span>
            </div>
        </article>
    });
    return <div className="posts-wrapper d-flex">
        {post}
    </div>
}


export default Post;