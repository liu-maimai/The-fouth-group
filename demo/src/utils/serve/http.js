import axios from "axios";
import Vue from "vue";
import loading from "../../components/index";
Vue.use(loading);
const server = axios.create({
    baseURL: "",
    timeout: 10000, //请求超时时间
});
//请求拦截
server.interceptors.request.use(
    (config) => {
        Vue.$loading.show();
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
//res 服务器返回的数据信息
server.interceptors.response.use(
    (res) => {
        if (res.data == "无效token") {
            alert("token无效，请重新登录");
            Vue.$loading.hide();
        } else {
            Vue.$loading.hide();

            return res;
        }
    },
    (err) => {
        setTimeout(() => {
            Vue.$loading.hide();
        }, 1000);
        //具体情况要看服务器真实的返回数据
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