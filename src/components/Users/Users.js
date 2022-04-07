import {useEffect, useState} from "react";
import {userService} from "../../services";

import {User} from "../User/User";
import {Posts} from "../posts/posts";
import css from '../../App.module.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    const getDetails = (user) => {
        setUser(user)
    }
    const getPosts = async (id) => {
       const {data} = await userService.getPostsByUserId(id)
        setPosts(data)
    }

    return (
        <div className={css.display_flex}>
            <div className={css.w50}>
                {users.map(user => <User key={user.id} user={user} getDetails={getDetails}/>)}
            </div>

            {
                user &&
                <div className={css.w50}>
                    id: {user.id} <br/> name: {user.name} <br/> username: {user.username} <br/>
                    email: {user.email} <br/> address: <br/> street: {user.address.street}<br/>
                    suite: {user.address.suite} <br/> city: {user.address.city}<br/>
                    zipcode: {user.address.zipcode} <br/> geo: <br/> lat: {user.address.geo.lat} <br/>
                    lng: {user.address.geo.lng}
                    {/*як впровадити рекурсію поки не дійшло, писав все руцями :(  */}
                    <button onClick={() => getPosts(user.id)}>Get posts</button>
                </div>
            }
            {
                posts &&
                <div>{posts.map(post => <Posts key={post.id} post={post} />)}</div>
            }
        </div>
    );
};

export {Users};