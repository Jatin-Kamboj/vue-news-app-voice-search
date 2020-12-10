import { createRouter, createWebHistory } from "vue-router";

import publicRoutes from "./routes/public.routes";

/**
 * All the routes of the application
 */
const routes = [...publicRoutes];

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
