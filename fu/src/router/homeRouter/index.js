//项目路由
const routes = [
  {
    path: "home",
    name: "home",
    component: () => import("../../views/Home/Home.vue"),
  },
  {
    path: "class",
    name: "class",
    component: () => import("../../views/Class/class.vue"),
  },
  {
    path: "practice",
    name: "practice",
    component: () => import("../../views/practice/practice.vue"),
  },
  {
    path: "personal",
    name: "personal",
    component: () => import("../../views/personal/personal.vue"),
  },
  {
    path: "Appointment",
    name: "Appointment",
    component: () => import("../../views/Appointment/Appointment.vue"),
  },

];

export default routes;
