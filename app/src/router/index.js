import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import homeRouter from "./homeRouter";
Vue.use(VueRouter);

import { Toast } from "vant";
Vue.use(Toast);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    children: [
      ...homeRouter,

      {
        path: "/recommend", //推荐课程
        name: "recommend",
        component: () => import("../views/Home/Characteristic/recommend.vue"),
        meta: { title: "推荐课程" },
      },
      {
        path: "/starsteachers", //推荐课程
        name: "starsteachers",
        component: () =>
          import("../views/Home/Characteristic/Starsteachers.vue"),
        meta: { title: "推荐课程" },
      },
    ],
  },
  {
    path: "/oneone", //一对一辅导
    name: "oneone",
    component: () => import("../views/child/oneVone.vue"),
    meta: { title: "一对一辅导" },
  },
  {
    path: "/Calendar", //学习日历
    name: "Calendar",
    component: () => import("../views/child/Calendar.vue"),
    meta: { title: "学习日历", isLogin: true },
  },
  {
    path: "/teachersDetail", //老师详情
    name: "teachersDetail",
    component: () => import("../views/Home/Characteristic/teachersDetail.vue"),
    meta: { title: "老师详情" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views//Login.vue"),
    meta: { title: "登录页面" },
  },
  {
    path: "/mingxingdetail", //明星讲师列表
    name: "mingxingdetail",
    component: () => import("../views/Ziwenjian/Mingxingdetail.vue"),
    meta: { title: "明星讲师列表" },
  },
  {
    path: "/stareddetail",
    name: "stareddetail",
    component: () => import("../views/Ziwenjian/Stareddetail.vue"),
    meta: { title: "明星讲师详情" },
  },
  {
    path: "/Characteristic", //名师阵容
    name: "Characteristic",
    component: () => import("../views/Characteristic.vue"),
    meta: { title: "名师阵容", isLogin: true },
  },
  {
    path: "/classdeail", //精品课程
    name: "classdeail",
    component: () => import("../views/Ziwenjian/Classdetail.vue"),
    meta: { title: "精品课程", isLogin: true },
  },

  {
    path: "/getLearn", //立即学习
    name: "getLearn",
    component: () => import("../views/Ziwenjian/getLearn.vue"),
    meta: { title: "立即学习" },
  },
];

const router = new VueRouter({
  routes,
});
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isLogin)) {
    if (store.state.token) {
      next();
    } else {
      Toast("即将去登录");
      setTimeout(() => {
        next("/login");
      }, 2000);
    }
  } else {
    next();
  }
});

export default router;
