import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => h(App)
}).$mount("#app");
