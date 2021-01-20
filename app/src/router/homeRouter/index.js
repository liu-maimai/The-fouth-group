//项目路由
const routes = [
  {
    path: "/",
    redirect: "home",
  },
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
  {
    path: "teachers",
    name: "teachers ",
    component: () => import("@/views/personal/Son/Teachers.vue"),
    meta: { title: "关注的老师" },
  },
  {
    path: "collections",
    name: "collections",
    component: () => import("@/views/personal/Son/Collections.vue"),
    meta: { title: "我的收藏页面" },
  },
  {
    path: "curriculum",
    name: "curriculum",
    component: () => import("@/views/personal/Son/Curriculum.vue"),
    meta: { title: "课程订单" },
  },
  {
    path: "memberorders",
    name: "memberorders",
    component: () => import("@/views/personal/Son/Memberorders.vue"),
    meta: { title: "会员订单" },
  },
  {
    path: "appointmentorder",
    name: "appointmentorder",
    component: () => import("@/views/personal/Son/Appointmentorder.vue"),
    meta: { title: "约课订单" },
  },

  {
    path: "coupon",
    name: "coupon",
    component: () => import("@/views/personal/Son/Coupon.vue"),
    meta: { title: "优惠券页面" },
  },
  {
    path: "card",
    name: "card",
    component: () => import("@/views/personal/Son/Card.vue"),
    meta: { title: "学习卡页面" },
  },
  {
    path: "member",
    name: "member",
    component: () => import("@/views/personal/Son/Member.vue"),
    meta: { title: "学习卡页面" },
  },
  {
    path: "mynews",
    name: "mynews",
    component: () => import("@/views/personal/Son/Mynews.vue"),
    meta: { title: "我的消息页面" },
  },
  {
    path: "opinion",
    name: "opinion",
    component: () => import("@/views/personal/Son/Opinion.vue"),
    meta: { title: "意见反馈页面" },
  },
  {
    path: "customer ",
    name: "customer ",
    component: () => import("@/views/personal/Son/Customer .vue"),
    meta: { title: "在线客服页面" },
  },
  {
    path: "setup",
    name: "setup ",
    component: () => import("@/views/personal/Son/Setup.vue"),
    meta: { title: "设置页面" },
  },
];

export default routes;
