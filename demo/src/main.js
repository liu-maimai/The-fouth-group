import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vant 引入并调用
import vant from "vant"
import 'vant/lib/index.css';
Vue.use(vant)
//element-ui 引入并调用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//axios引入并调用,调用方式为挂载在原型上，这样所以vue项目都可以使用axios
import axios from "axios"
Vue.prototype.$axios=axios
//引入动画
import 'animate.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
