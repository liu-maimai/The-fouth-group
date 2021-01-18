import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全部引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
//引入Rem 响应式布局
import Rem from '../src/rem/Rem'
Vue.prototype.$Rem = Rem
//全局引入Api
import Net from './api/index'
Vue.prototype.$Net = Net
// 全局时间过滤器
Vue.filter("timefn",function(originval){
  const dt = new Date(originval)

  const yy = dt.getFullYear()
  const mm = (dt.getMonth() +1+'' ).padStart(2,0)
  const dd = (dt.getDate() +'' ).padStart(2,0)
  const hh = (dt.getHours() +'' ).padStart(2,0)
  const ff = (dt.getMinutes() +'' ).padStart(2,0)
  const ss = (dt.getSeconds() +'' ).padStart(2,0)

  return `${mm}月${dd}日 ${hh}:${ff}`
})
Vue.filter("timefnxq",function(originval){
  const dt = new Date(originval)

  const yy = dt.getFullYear()
  const mm = (dt.getMonth() +1+'' ).padStart(2,0)
  const dd = (dt.getDate() +'' ).padStart(2,0)
  const hh = (dt.getHours() +'' ).padStart(2,0)
  const ff = (dt.getMinutes() +'' ).padStart(2,0)
  const ss = (dt.getSeconds() +'' ).padStart(2,0)

  return `${yy}.${mm}.${dd} ${hh}:${ff}`
})
// 修复全局点击重复路由bug
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
