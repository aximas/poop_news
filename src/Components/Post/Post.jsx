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
        return <article className={`d-flex d-flex-d-column post ${props.classNameChanger([0, 1, 5, 6], i)('post-large')}`} key={i}>
            <PopUpNews {...post}>
                {post.title}
            </PopUpNews>
            <div className="post-body">
                <p className="post-description">
                    {post.description}
                </p>
            </div>
            <img src={post.urlToImage ?? imgPlaceholder} alt={post.title} className={`post-thumbnail ${props.classNameChanger([0, 1, 5, 6], i)('post-thumbnail-large')}`}/>
            <div className="post-footer">
                <span className="post-footer-info post-author">
                    {post.author ? post.author + " - " : null}
                </span>
                <span className="post-footer-info post-source">
                   "{post.source.name}"
                </span>
                <span className="post-footer-info post-delimiter">
                   /
                </span>
                <span className="post-footer-info post-published-data">
                    <time className="post-published-date" dateTime={post.publishedAt}>{post.publishedAt.split('T')[0]}</time>
                    <time className="post-published-time" dateTime={post.publishedAt}>{post.publishedAt.split('T')[1].slice(0, post.publishedAt.split('T')[1].lastIndexOf('Z'))}</time>
                </span>
            </div>
        </article>
    });
    return <div className="posts-wrapper d-flex">
        {post}
    </div>
}


export default Post;