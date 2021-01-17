import Vue from "vue";
import Vuex from "vuex";
import persist from "vuex-persistedstate";
Vue.use(Vuex);
Vue.use(persist);

export default new Vuex.Store({
  state: {
    list: "浙江卫视一场屠杀",
    num: 100,
  },
  mutations: {
    addNum(state) {
      state.num += 10;
    },
    
  },
  actions: {},
  modules: {},
  getters: {
    numGetter(state) {
      return Math.pow(state.num, 2);
    },
  },
  plugins: [persist()],
});
