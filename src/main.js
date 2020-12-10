import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import alanBtn from "@alan-ai/alan-sdk-web";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
