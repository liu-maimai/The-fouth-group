import Vue from "vue";
import VueRouter from "vue-router";
import homeRouter from "./homeRouter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    children: [
      ...homeRouter,
      {
        path: "/Characteristic", //名师阵容
        name: "Characteristic",
        component: () =>
          import("../views/Home/Characteristic/Characteristic.vue"),
      },
      {
        path: "/classdeail", //精品课程
        name: "classdeail",
        component: () => import("../views/Home/Characteristic/Classdetail.vue"),
      },
      {
        path: "/recommend", //推荐课程
        name: "recommend",
        component: () => import("../views/Home/Characteristic/recommend.vue"),
      },
      {
        path: "/starsteachers", //推荐课程
        name: "starsteachers",
        component: () =>
          import("../views/Home/Characteristic/Starsteachers.vue"),
      },
    ],
  },
  {
    path: "/oneone", //一对一辅导
    name: "oneone",
    component: () => import("../views/child/oneVone.vue"),
  },
  {
    path: "/Calendar", //学习日历
    name: "Calendar",
    component: () => import("../views/child/Calendar.vue"),
  },
  {
    path: "/teachersDetail", //老师详情
    name: "teachersDetail",
    component: () => import("../views/Home/Characteristic/teachersDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
