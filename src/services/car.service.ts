import {AxiosResponse} from "axios";
import {axiosService} from "./axios.service";

import {ICar} from "../interfaces";
import {urls} from "../constants";

type Res<T> = Promise<AxiosResponse<T>>

const carService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar): Res<ICar> => axiosService.post(urls.cars, car),
    updateById:(id:string, car:ICar):Res<ICar> => axiosService.put(`${urls.cars}/${id}`),
    deleteById:(id:string):Res<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}