import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import css from '../Page.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers(data))
    },[])
    return (
        <div className={css.flex}>
            <div className={css.w40percent}>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={css.w60percent}><Outlet/></div>
        </div>
    );
};

export {UsersPage};