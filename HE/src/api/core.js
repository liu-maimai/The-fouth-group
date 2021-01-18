import axios from 'axios'
//引入封装接口
import API from './config'
import {Toast} from "vant";
import {Guid} from "../utils/guid"
let deviceid=null;//初始化设备id
//先获取设备id 如果有 使用之前的 如果没有获取最新的
console.log(Guid.NewGuid().ToString("D"))
let id= window.localStorage.getItem("deviceid")
if(id){
    deviceid=id
}else{
    deviceid=Guid.NewGuid().ToString("D")
}
window.localStorage.setItem("deviceid",deviceid)
//axios 实例
const instance  = axios.create({
    baseURL:'http://120.53.31.103:84',
    // baseURL:'https://www.365msmk.com',
    timeout:6000 //设置超时时间
})
//添加请求拦截器
instance.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
  //弹起loading控件
  //拦截请求config配置 动态添加或者删除配置
  Toast.loading({
    duration:5000,
    message: '加载中...',
    forbidClick: true,
  });
  //登录之后再次请求时，会携带token进行身份验证
  let token=window.localStorage.getItem("token")
  if(token){
    config.headers.authorization=`Bearer ${token}`
  }
  config.headers.deviceid=deviceid
  config.headers.devicetype="H5"
 


  return config;
},function(error){
    // 对请求错误做些什么
  //提示用户请求发送失败原因 
  return Promise.reject(error)
});
instance.interceptors.response.use(function(response){
    //对响应数据做点什么
    //接受完成后对自身服务器响应的状态码进行处理
    //收起loading控件
    //对响应的数据做初步处理
    //结束loading
    // setTimeout(()=>{
    //     loinstance.close()
    // },1000)
    Toast.clear()
    
    return response;

},function(error){
    //返回对响应错误的事情
    return Promise.reject(error)
})
//判断Post 还是Get 请求
export function request(method,url,params){
    switch(method){
        case API.Method.Get:
        return Get(url,params)
        case API.Method.Post:
        return Post(url,params)
        case API.Method.Put:
         return Put(url,params)
    }
}
function Get(url,params){
    return instance.get(url,params)
}

function Post(url,params){
    return instance.post(url,params)
}
function Put(url,params){
    return instance.put(url,params)
}