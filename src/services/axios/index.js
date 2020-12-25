import axios from "axios";
import { API_BASE_URL } from "../api/endpoints";
import { errorInterceptor, requestInterceptor } from "./interceptors";

/**
 * Axios intsnace to be used to send an api request to the server
 * @returns {Promise || Error}
 */
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
});

/**
 * Intercepts the api requests
 */
axiosInstance.interceptors.request.use(requestInterceptor, errorInterceptor);
// axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default axiosInstance;
