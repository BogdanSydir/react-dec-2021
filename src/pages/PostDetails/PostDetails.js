import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {PostDetail} from "../../components";

const PostDetails = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [postDetails, setPostDetails] = useState(state)
    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPostDetails(data))
        } else setPostDetails(state)
    }, [id, state])
    return (
        <div>
            {postDetails && <PostDetail postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetails};