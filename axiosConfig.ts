import axios from 'axios';

const API =
  process.env.NODE_ENV.trim() === 'developement'
    ? process.env.BASE_URL
    : process.env.PRODUCTION_URL;

const axiosInstance = axios.create({
  baseURL: 'https://devblogapi.herokuapp.com/api/v1'
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
