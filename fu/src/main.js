import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
import axios from "axios";
Vue.prototype.$axios = axios;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import "./assets/js/rem";
import "./assets/css/reset.css";
import "./assets/css/commin.css";
//引入axios封装
import "./utils/server/index";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
