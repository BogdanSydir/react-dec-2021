import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch()
    const deleteById = async (id) => {
        await dispatch(carActions.deleteById({id}))
    }
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <button onClick={()=> deleteById(id)}>delete</button>
        </div>
    );
};

export {Car};