import axios from 'axios'
import { Dialog } from 'vant';
const server = axios.create({
    baseURl: '',
    timeout: 10000
})

// 请求拦截
server.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
}, err => {
    console.log(err);
})

// 响应拦截
server.interceptors.response.use(res => {
    if (res.data == "无效token") {
        Dialog.alert({
            message: 'token无效，请重新登录！',
        }).then(() => {
            // on close
        });
    } else {
        return res
    }
}, err => {
    switch (err.code) {
        case 500:
            console.log('服务器错误')
        break;
        case 404:
            console.log('页面找不到了')
        break;
        default:
            console.log('网络连接错误')
        break;
    }
})

export default server