import axios from "axios";
import Vue from "vue";
import loading from "@/components/index";
Vue.use(loading);
const server = axios.create({
  baseURL: "http://120.53.31.103:84",
  timeout: 10000,
});

//请求拦截
server.interceptors.request.use(
  (config) => {
    setTimeout(() => {
      Vue.$loading.show();
    }, 1000);
    Vue.$loading.show();
    config.headers = {
      deviceType: "H5",
    };
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

//响应拦截
//res服务器返回的数据信息
server.interceptors.response.use(
  (res) => {
    if (res.data == "无效token") {
      alert("token无效，请重新登录");

      Vue.$loading.hide();
    } else {
      setTimeout(() => {
        Vue.$loading.hide();
      }, 1000);
      return res;
    }
  },
  (err) => {
    Vue.$loading.hide();

    switch (err.code) {
      case 500:
        console.log("服务器错误");
        break;
      case 404:
        console.log("页面找不到了");
        break;
      default:
        console.log("网络连接错误");
        break;
    }
  }
);

export default server;
