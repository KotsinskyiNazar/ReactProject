import axios from 'axios';
import {baseURL} from "../Configs/urls";


const API_KEY = process.env.REACT_APP_API_KEY;

export const axiosService = axios.create({baseURL: baseURL, params: {api_key: API_KEY}})