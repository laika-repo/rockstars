import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { cacheAdapterEnhancer } from "axios-extensions";
Vue.config.productionTip = false;

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Cache-Control": "no-cache" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter)
});

Vue.prototype.axios = axios;
Vue.prototype.$http = instance;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
