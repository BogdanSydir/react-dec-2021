import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: ()=>axiosService.get(urls.posts),
    getById: (id)=>axiosService.get(`${urls.posts}/${id}`)
}
const userService = {
    getAll: ()=>axiosService.get(urls.users),
    getById: (id)=>axiosService.get(`${urls.users}/${id}`),
    getPosts: (id)=>axiosService.get(`${urls.users}/${id}/posts`)
}

export {postService, userService}