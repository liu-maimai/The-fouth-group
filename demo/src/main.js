import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入rem文件
import './assets/js/rem'
//vant 引入并调用
import vant from "vant"
import 'vant/lib/index.css';
Vue.use(vant)
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
