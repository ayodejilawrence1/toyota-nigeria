import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import MyComponents from "./components";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(MyComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
