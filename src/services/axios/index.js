import axios from "axios";
import { API_BASE_URL } from "../apis/api-endpoints";
import { errorInterceptor, requestInterceptor } from "./interceptors";

/**
 * Axios instance to be used to send an api request to the server
 * @returns {Promise || Error}
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
});

/**
 * Intercepts the api requests
 */
api.interceptors.request.use(requestInterceptor, errorInterceptor);
// api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
