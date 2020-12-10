import { createRouter, createWebHistory } from "vue-router";

import { PublicRoutes } from "./routes";

/**
 * All the routes of the application
 */
const routes = [...PublicRoutes];

/**
 * Creates router
 */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// /**
//  * Initialises the router if env is not test
//  */
// if (process || process.env.NODE_ENV !== "test") {
//   Vue.use(router);
// }

export default router;
