import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id} -- {title} <br/>
            <Link to={`${id}`} state={post}>get details</Link>
            <hr/>
        </div>
    );
};

export {Post};