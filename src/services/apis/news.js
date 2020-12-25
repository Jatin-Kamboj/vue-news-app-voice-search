import api from "../axios";

/**
 * Fetches top news headlines
 * @param {Object} params Request params
 * @returns {Promise} returns list of all the top news headlines
 */
export const getTopHeadlines = (params = {}) => {
  return api.get("/top-headlines", { params });
};
