import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const mySubmit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateById(carForUpdate.id, car)
            setUpdatedCar(data)

        } else {

            console.log('else')
            const {data} = await carService.create(car); // car - це дані з інпута, data - це відповідь з сервера
            setNewCar(data)
            console.log(data)
        }

        reset()

    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>save</button>

        </form>
    );
};

export {CarForm};