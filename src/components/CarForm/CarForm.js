import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const dispatch = useDispatch()
    const {formErrors, carToUpdate} = useSelector(state => state.carsReducer)
    const {reset, register, handleSubmit, setValue} = useForm()

    if (carToUpdate) {
        setValue('model', carToUpdate.model)
        setValue('price', carToUpdate.price)
        setValue('year', carToUpdate.year)
    }
    const submit = async (newCar) => {
        if (carToUpdate) {
            await dispatch(carActions.updateById({car:newCar, id:carToUpdate.id}))
            reset()
        } else {
            await dispatch(carActions.create({car: newCar}))
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model:<input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div><label>price:<input type="text" {...register('price')}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <div><label>year:<input type="text" {...register('year')}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <button>save</button>
            {/*{carToUpd}*/}
        </form>
    );
};

export {CarForm};