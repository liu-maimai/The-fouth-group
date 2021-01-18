import { request } from './core'
import API from './config'

const Net = {
  // 抛出方法
  List(params) {
    return request(API.Method.Get,API.Path.List, params)
  },
  // 抛出方法
  login(params) {
    return request(API.Method.Post, API.Path.LOGIN, params)
  },
  // 课程导航
  courseNav(params) {
    return request(API.Method.Get, API.Path.HMWFL, params)
  },
  // 获取课程列表的方法
  courseList(params) {
    return request(API.Method.Get, API.Path.HMWLIST, params)
  },
  // 获取详情页面数据
  courseXQList(params) {
    return request(API.Method.Get, API.Path.HMWXQ, params)
  },
  // 设置收藏
  courseXQSC(params) {
    return request(API.Method.Post, API.Path.HMWSC, params)
  },
  // 取消收藏
  courseXQSCNO(params) {
    return request(API.Method.Post, API.Path.HMWSCNO, params)
  },
  // 课程评价数据
  courseXQPJ(params) {
    return request(API.Method.Post, API.Path.HMWPJ, params)
  },
  //获取个人信息
  xuue(){
    return request(API.Method.Get,API.Path.XUE)
  },
  //特色课获取
  te(){
    return request(API.Method.Get,API.Path.TE)
  },
  //我的关注
  guan(){
    return request(API.Method.Get,API.Path.GUAN)
  },
  ke(){
    return request(API.Method.Get,API.Path.KE)
  },
  xue(){
    return request(API.Method.Get,API.Path.Xue)
  },
  //首页推荐老师列表详情页内容
  HomeLIST(params){
    return request(API.Method.Get,API.Path.HomeLIST,params)
  },
  //验证码登录
  yan(){
    return request(API.Method.Post,API.Path.YAN)
  },
  //修改个人信息
  xiu(){
    return request(API.Method.Put,API.Path.XIU)
  },
  //设置密码
  she(params){
    return request(API.Method.Post,API.Path.SHE,params)
  },
  //课程收藏
  cang(){
    return request(API.Method.Post,API.Path.CANG)
  },
  //讲师详情
  shi(params){
    console.log(params);
    return request(API.Method.Get,API.Path.SHI+params)
  },
  // 练习页面的套卷练习
  LIANXI(params){
    return  request(API.Method.Get,API.Path.LIANXI,params)
  },
  // 伦播
  LUNBO(){
    return  request(API.Method.Get,API.Path.LUNBO)
  },
  // 考点练习里面的题库选择
  TIKU(params){
    return  request(API.Method.Get,API.Path.TIKU+params)
  },
  // 练习页面的测评记录
  CEP(page){
    return  request(API.Method.Get,API.Path.LUNBO,page)
  }

}

//抛出Net
export default Net;
