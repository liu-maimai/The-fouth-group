import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from '../views/home/home'
import classRouter from '../views/class/class'
import orderRouter from '../views/order/order'
import exerciseRouter from '../views/exercise/exercise'
import personRouter from '../views/person/person'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        children: [
          ...homeRouter
        ]
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('../views/class/class.vue'),
        // children: [
        //   ...classRouter
        // ]
      }, {
        path: '/order',
        name: 'order',
        component: () => import('../views/order/order.vue'),
        // children: [
        //   ...orderRouter
        // ]
      }, {
        path: '/exercise',
        name: 'exercise',
        component: () => import('../views/exercise/exercise.vue'),
        // children: [
        //   ...exerciseRouter
        // ]
      }, {
        path: '/person',
        name: 'person',
        component: () => import('../views/person/person.vue'),
        // children: [
        //   ...personRouter
        // ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})
//在router.js中配置的路由下方放入（为了防止router中push方法的bug出现）：
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  if (typeof (location) == "string") {
    var Separator = "&";
    if (location.indexOf('?') == -1) {
      Separator = '?';
    }
    location = location + Separator + "random=" + Math.random();
  }
  return routerPush.call(this, location).catch(error => error)
}
export default router