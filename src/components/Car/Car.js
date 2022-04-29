import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch()
    const deleteById = async (id) => {
        await dispatch(carActions.deleteById({id}))
    }
    const setToUpdate = (id) =>{
        dispatch(carActions.setToUpdate({id}))
    }
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <button onClick={()=> deleteById(id)}>delete</button>
            <button onClick={()=> setToUpdate(id)}>update</button>
        </div>
    );
};

export {Car};