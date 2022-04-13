import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([])
    const [deletedCarId, setDeletedCarId] = useState(null)

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[updatedCar])

    useEffect(()=>{
        if(newCar){
            setCars(prevState => [...prevState, newCar])
        }
    },[newCar])

    useEffect(()=>{
        if(deletedCarId){
            setCars(cars.filter(car => car.id !== deletedCarId))
        }
    },[deletedCarId])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setDeleteCarId={setDeletedCarId} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};