import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'a5aa57ed';
const axiosInstance = axios.create(configOMB);

const API = {
        searchFilmsByTitle: (title: string) => {
            return axiosInstance.get(`/?apikey=${key}&t=${title}`)
        },
        searchFilmsByType: (title: string, type: string) => {
            return axiosInstance.get(`/?apikey=${key}&t=${title}&type=${type}`)
        },
        getPosterByFilm: (title:string) => {
            return axios.get(`http://img.omdbapi.com/?apikey=${key}&t=${title}`)
        }
    }
;


export default API;
