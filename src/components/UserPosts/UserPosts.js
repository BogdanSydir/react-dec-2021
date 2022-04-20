import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserPost} from "../UserPost/UserPost";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
        userService.getPosts(id).then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};