import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {useRef} from "react";

const LoginPage = () => {

    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    const navigate = useNavigate();

    const login = () => {
        const userName = name.current.value;
        logIn(userName, ()=>navigate(state.pathname, {replace: true}))
    }
    return (
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button onClick={()=> login()}>log in</button>
        </div>
    );
};

export {LoginPage};