import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import css from '../Page.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div className={css.flex}>
            <div className={css.w40percent} >{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div className={css.w60percent}><Outlet/></div>
        </div>
    );
};

export {PostsPage};