import {axiosService} from "./axios.services";
import {urls} from "../Configs/urls";


export const MoviesService = {
    getByPage: (page) => axiosService.get(urls.movies, {params: {page}}).then((value) => value.data),
    getDetails: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data),
    getGenres:() => axiosService.get(`/genre/movie/list`).then(value => value.data),
}