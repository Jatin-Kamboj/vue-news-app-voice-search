import Home from "@/views/Home.vue";

/**
 * Routes to be accessed by the public
 */
const publicRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  // },
];

export default publicRoutes;
