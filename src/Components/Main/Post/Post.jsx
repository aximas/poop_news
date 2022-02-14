import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import "./Post.scss"

const Post = (props) => {
    if (!props.posts) {
        return (
            <Preloader/>
        )
    }
    const post = props.posts.map((post, i) => {
        return <article className={`d-flex d-flex-d-column post ${props.classNameChanger([0, 1, 5, 6], i)('post-large')}`} key={i}>
            <h3 className="post-title">
                <a href={post.url} target="_blank">
                    {post.title}
                </a>
            </h3>
            <div className="post-body">
                <p className="post-description">
                    {post.description}
                </p>
            </div>
            <img src={post.urlToImage} alt={post.title} className={`post-thumbnail ${props.classNameChanger([0, 1, 5, 6], i)('post-thumbnail-large')}`}/>
            <div className="post-footer d-flex d-flex-y-center">
                <span className="post-footer-info post-author">
                    {post.author}
                </span>
                <span className="post-footer-info post-source">
                   - "{post.source.name}"
                </span>
                <span className="post-footer-info post-delimiter">
                   /
                </span>
                <p className="post-footer-info post-published-data">
                    <time className="post-published-date" dateTime={post.publishedAt}>{post.publishedAt.split('T')[0]}</time>
                    <time className="post-published-time" dateTime={post.publishedAt}>{post.publishedAt.split('T')[1].slice(0, post.publishedAt.split('T')[1].lastIndexOf('Z'))}</time>
                </p>
            </div>
        </article>
    });
    return <div className="posts-wrapper d-flex">
        {post}
    </div>

    // return  <article className="post">
    //     <h3 className="article-title">
    //         Title
    //     </h3>
    //     <div className="post-body">
    //         <p className="post-description">
    //             card-description
    //         </p>
    //     </div>
    //     <div className="post-footer">
    //         card-footer
    //     </div>
    // </article>
}


export default Post;