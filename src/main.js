import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main2.css";
import router from "./router";
import store from "./store";


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
