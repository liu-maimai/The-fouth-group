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

export { getBanners, getList, getCharacteristic };
