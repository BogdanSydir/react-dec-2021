import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    //5. витягуємо дані зі стейту і відображаємо
    const {cars, status} = useSelector(state => state.carsReducer)
// const деструктуризує initialState, useSelector обирає редюсер з якого тягнемо стейт

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carActions.getAll()) //1.викликаємо getAll у car.slice ->
    },[])

    return (
        <div>
            {status&&<h1>{status}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};