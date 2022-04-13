import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeleteCarId}) => {
    const {id, model, price, year} = car;
    const deleteCar = async ()=> {
        await carService.deleteById(id)
        setDeleteCarId(id)
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>set to update</button>
            <button onClick={()=> deleteCar(id)}>delete</button>
            <br/>
        </div>
    );
};

export {Car};