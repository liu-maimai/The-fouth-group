import Vue from "vue";
import loading from "@/components/loading.vue";
const CreateLoading = Vue.extend(loading);
// console.log(Vue.extend(loading));
const newLoading = new CreateLoading({
  el: document.createElement("div"), // 给loading创建一个挂载点
});

newLoading.show = false; // 定义显示隐藏

//判断隐藏
const $loading = {
  show() {
    newLoading.show = true;
    document.body.appendChild(newLoading.$el);
  },
  hide() {
    newLoading.show = false;
  },
};

export default {
  // 如果有执行有的  没有就混入进入 在 main 中引入并使用
  install() {
    if (!Vue.$loading) {
      Vue.$loading = $loading;
    }
    Vue.mixin({
      // 这是全局混入方法 意思就是给所有的组件混入一个created逻辑
      // 相当于给每一个组件添加一个$loading方法
      created() {
        this.$loading = Vue.$loading;
      },
    });
  },
};
