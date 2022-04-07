import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getPostsByUserId: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`)
}

export {userService}