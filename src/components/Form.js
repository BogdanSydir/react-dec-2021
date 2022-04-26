import {useRef} from "react";
import {useDispatch} from "react-redux";

import {catActions, dogActions} from "../redux";

const Form = () => {
    const nameInput = useRef()
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=> dispatch(catActions.add({cat:nameInput.current.value}))}>add cat</button>
            <button onClick={()=> dispatch(dogActions.add({dog:nameInput.current.value}))}>add dog</button>
        </div>
    );
};

export {Form};