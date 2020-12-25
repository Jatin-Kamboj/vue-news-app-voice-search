import { getNewsApiKey } from "@/utils";

/**
 * Intercepts all the api response errors
 */
export function errorInterceptor(error) {
  // const response = error.response;
  //   if (response && response.status === 401) {
  //   } else {

      return Promise.reject(error);
  //   }
}
/**
 * Intercept an api before api request is sent to the server
 * @returns {Promise} api request
 */
export function requestInterceptor(request) {
  if (request) {
    request.headers.common["Authorization"] = `Bearer ${getNewsApiKey()}`;
    return request;
  } else {
    return Promise.reject(request);
  }
}
