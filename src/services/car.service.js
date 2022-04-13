import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars, car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id, updateCar)=>axiosService.put(`${urls.cars}/${id}`, updateCar)
}

export {carService}