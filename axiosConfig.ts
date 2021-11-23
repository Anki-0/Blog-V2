import axios from 'axios';

let API;
if (process.env.NODE_ENV.trim() === 'development') {
  API = process.env.BASE_URL;
} else {
  API = process.env.BASE_URL;
}
const axiosInstance = axios.create({
  baseURL: `${API}`
});

// const axiosInstance = axios.create({
//   baseURL: 'https://devblogapi.herokuapp.com/api/v1/'
// });

axiosInstance.defaults.withCredentials = true;
export default axiosInstance;
