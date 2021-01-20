import server from "../server";
//获取轮播图数据
const getBanners = async function() {
  let { data } = await server.get("/api/app/banner");
  return Promise.resolve(data);
};

//首页列表
const getList = async function() {
  let { data } = await server.get("/api/app/recommend/appIndex");
  return Promise.resolve(data);
};

//特色课
const getCharacteristic = async function() {
  let { data } = await server.get("/api/app/courseBasis?page=1&limit=10&", {});
  return Promise.resolve(data);
};
//登录接口
const getLogin = async function(obj) {
  // console.log(mobile, password, type);
  let { data } = await server.post("/api/app/login", {
    mobile: obj.mobile,
    password: obj.password,
    type: obj.type,
  });
  return Promise.resolve(data);
};

//全部明星讲师数据/api/app/teacher/search/attrs?page=1&limit=10&

const getStarteachers = async function() {
  let { data } = await server.get(
    "/api/app/teacher/search/attrs?page=1&limit=10&"
  );
  return Promise.resolve(data);
};

//首页明星讲师详情页
const getHubteachers = async function(params) {
  let { data } = await server.get("/api/app/teacher/" + params.id);
  return Promise.resolve(data.data);
};

//主讲课程
const getClass = async function(params) {
  let { data } = await server.post("/api/app/teacher/mainCourse", {
    id: params.id,
    limit: params.limit,
    page: params.page,
  });
  return Promise.resolve(data.data);
};

//特色课 /api/app/courseBasis?page=1&limit=10&
const getTese = async function() {
  let { data } = await server.get("/api/app/courseBasis?page=1&limit=10&");
  return Promise.resolve(data.data);
};

//课程数据详情
const getClassify = async function(params) {
  let { data } = await server.get(`/api/app/courseInfo/basis_id=${params}`);
  return Promise.resolve(data);
};
//获取课程大纲数据
const getSyllabus = async function(params) {
  let { data } = await server.post("/api/app/courseChapter", { id: params.id });
  return Promise.resolve(data.data);
};

//立即学习接口
const getLearn = async function(params) {
  console.log(params);
  let { data } = await server.post("/api/app/order/downOrder", {
    shop_id: params,
    type: 5,
  });
  return Promise.resolve(data.data);
};

export {
  getBanners,
  getList,
  getCharacteristic,
  getLogin,
  getStarteachers,
  getHubteachers,
  getClass,
  getTese,
  getClassify,
  getSyllabus,
  getLearn,
};
