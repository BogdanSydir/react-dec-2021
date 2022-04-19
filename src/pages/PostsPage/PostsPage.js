import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import css from '../Page.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        postService.getAll(query.get('page'), 10).then(({data}) => setPosts(data))
    }, [query])

    const nextPage = () =>{
        // let page = query.get('page')
        // page = +page + 1
        // setQuery({page:page.toString()})
        const queryObj = Object.fromEntries(query.entries())
        queryObj.page++
        setQuery(queryObj)
    }

    return (
        <div className={css.flex}>
            <div className={css.w40percent} >{posts.map(post => <Post key={post.id} post={post}/>)}
                <button onClick={() => nextPage()}>next</button>
            </div>
            <div className={css.w60percent}><Outlet/></div>
        </div>
    );
};

export {PostsPage};