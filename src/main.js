import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import VueCarousel from "vue-carousel";

import MyComponents from "./components";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";
import "./assets/css/utility.css";

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(MyComponents);

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
