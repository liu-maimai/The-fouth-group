import Vue from "vue";
import Vuex from "vuex";
import persist from "vuex-persistedstate";
Vue.use(Vuex);
Vue.use(persist);

export default new Vuex.Store({
  state: {
    //token
    token: "",
    id: "",
  },
  mutations: {
    //存储token
    login(state, val) {
      state.token = val;
    },
    //存储跳转讲师详情的接口参数
    detai(state, val) {
      state.id = val;
    },
  },
  actions: {},
  modules: {},
  getters: {},
  plugins: [persist()],
});
