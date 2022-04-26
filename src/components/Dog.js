import {useDispatch} from "react-redux";
import {dogActions} from "../redux";

const Dog = ({dog}) => {

    const {id, name} = dog
    const dispatch = useDispatch()
    return (
        <div>
            {id} -- {name}
            <button onClick={() =>dispatch(dogActions.deleteById({id}))}>delete</button>
        </div>
    );
};

export {Dog};