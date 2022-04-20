import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {UserDetail} from "../../components";

const UserDetails = () => {
        const {id} = useParams()
        const {state} = useLocation()
        const [userDetails, setUserDetails] = useState(state)
        useEffect(()=>{
            if(!state){
                userService.getById(id).then(({data})=> setUserDetails(data))
            } else setUserDetails(state)
        }, [id, state])
    return (
        <div>
            {userDetails && <UserDetail userDetail={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};