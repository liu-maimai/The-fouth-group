import { Tab } from 'vant';
<template>
  <div class="hmw-box">
    <!-- 顶部 -->
    <div class="hmw-top">
      <van-sticky>
        <!-- 这个是用来占个位子1 -->
        <!-- <van-nav-bar title="特色课" /> -->
        <van-nav-bar title="特色课">
  <template #right>
    <van-icon name="search" size="22" @click="$router.push('/search')"/>
  </template>
</van-nav-bar>
        <!-- 导航 -->
        <div class="hmw-nav">
          <van-dropdown-menu>
            <!-- 分类 -->
            <van-dropdown-item title="分类" ref="item" style="height: 100%">
              <van-cell style="height: 100%">
                <ul class="hmwNavLeft">
                  <li :key="index" v-for="(item, index) in hmwFl">
                    <p>{{ item.name }}</p>
                    <div class="hmw-nav-tag">
                      <van-row gutter="20">
                        <!-- 点击的时候改变样式并保存到本地 -->
                        <van-col
                          :key="i.id"
                          v-for="i in item.child"
                          :class="
                            hmwActiveNum1 == i.id || hmwActiveNum4 == i.id
                              ? 'hmwSpanActive'
                              : ''
                          "
                          span="6"
                          @click="hmwFlD(i, item.id)"
                          ><span>{{ i.name }}</span></van-col
                        >
                      </van-row>
                    </div>
                  </li>
                  <div>
                    <van-button
                      style="border: 1px solid #ccc"
                      plain
                      @click="hmwRefresh"
                      >重置</van-button
                    >
                    <van-button color="#eb6100" @click="hmwOk()"
                      >确定</van-button
                    >
                  </div>
                </ul>
              </van-cell>
            </van-dropdown-item>
            <!-- 排序 -->
            <van-dropdown-item title="排序" ref="item1">
              <van-cell class="hmwCenterNav" center>
                <li
                  :class="[
                    index == hmwSort.length - 1 ? 'hmwsortActive' : '',
                    hmwActiveNum2 == index ? 'hmwSpanActive' : '',
                  ]"
                  v-for="(item, index) in hmwSort"
                  :key="index"
                  @click="HmwSort(index)"
                >
                  {{ item }}
                </li>
              </van-cell>
            </van-dropdown-item>
            <!-- 筛选 -->
            <van-dropdown-item title="筛选" ref="item2">
              <van-cell class="hmwChoose" style="padding-top: 20px">
                <van-row gutter="20">
                  <van-col
                    :key="index"
                    v-for="(item, index) in hmwChoose"
                    span="6"
                    :class="hmwActiveNum3 == index ? 'hmwSpanActive' : ''"
                    @click="HmwChoose(item,index)"
                    ><span>{{ item.name }}</span></van-col
                  >
                </van-row>
              </van-cell>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </van-sticky>
    </div>
    <!-- 这里才是我要做的部分 -->
    <div class="hmw-center">
      <!-- 可滑动 -->
      <van-list>
        <div class="hmw-main">
          <!-- 主体部分列表渲染 -->
          <van-list>
            <!-- 这里必须要用v-for 当这个未定义时不渲染，这样才不会爆0的错！！！ -->
            <li
              v-if="item.teachers_list"
              :key="index"
              v-for="(item, index) in hmwList"
              @click="hmwJump(item)"
            >
              <h2>{{ item.title }}</h2>
              <p class="hmwP1">
                <van-icon name="clock-o" /><span
                  >{{ item.start_play_date | timefn }}~{{
                    item.end_play_date | timefn
                  }}&emsp;&emsp;|共{{ item.total_periods + "课时" }}</span
                >
              </p>
              <p class="hmwP2 hmwbaoBm">
                <img :src="item.teachers_list[0].teacher_avatar" alt="" /><span
                  >{{ item.teachers_list[0].teacher_name }}</span
                >
                <!-- 根据你有没有报名改变 -->
                <img class="hmwBm" v-if="item.has_buy!=0" src="../assets/hmwbm.png" alt="">
              </p>
              <div class="hmwListBottom">
                <span>{{ item.brows_num }}人已报名</span>
                <strong v-if="item.price == 0">免费</strong>
                <strong
                  v-if="item.price != 0"
                  style="color: orange; display: flex; align-items: center"
                  ><van-icon name="gold-coin" />&emsp;<span>{{
                    item.price / 100 + ".00"
                  }}</span></strong
                >
              </div>
            </li>
          </van-list>
        </div>
      </van-list>
    </div>
    <div class="hmw-foot"></div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      // 用来保存下标来做点击时样式
      // 分类下标
      hmwActiveNum1: 0 || sessionStorage.getItem("hmwFlIndex1"),
      // 分类下标2--有两个不同的下标
      hmwActiveNum4: 0 || sessionStorage.getItem("hmwFlIndex2"),
      // 排序下标
      hmwActiveNum2: 0,
      // 筛选下标
      hmwActiveNum3: 0,
      //    下拉菜单导航所需
      value: 0,
      switch1: false,
      switch2: false,
      // 分类
      hmwFl: [
        {
          id: 1,
          name: "年级",
          parent_id: 0,
          child: [
            {
              id: 1,
              name: "初一",
            },
            {
              id: 2,
              name: "初二",
            },
            {
              id: 3,
              name: "初三",
            },
            {
              id: 4,
              name: "高一",
            },
            {
              id: 5,
              name: "高二",
            },
          ],
        },
        {
          id: 2,
          name: "学科",
          parent_id: 0,
          child: [
            {
              id: 7,
              name: "语文",
            },
            {
              id: 8,
              name: "数学",
            },
            {
              id: 9,
              name: "英语",
            },
            {
              id: 12,
              name: "物理",
            },
            {
              id: 13,
              name: "化学",
            },
          ],
        },
      ],
      //   综合排序
      hmwSort: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到低"],
      // 筛选
      hmwChoose: [
        // { type: 0, value: "全部" },
        // { type: 2, value: "大班课" },
        // { type: 3, value: "小班课" },
        // { type: 4, value: "公开课" },
        // { type: 5, value: "点播课" },
        // { type: 7, value: "面授课" },
        // { type: 8, value: "音频课" },
        // { type: 9, value: "系统课" },
        // { type: 10, value: "图文课" },
        // { type: 11, value: "会员课" }
      ],
      // 主题列表
      hmwList: [
        {
          title: "李老师16号到22号地理大课堂开课了",
          date: "03月26日 18:30 ~ 03月22日 15:00 | ",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:
            "http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
        },
      ],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 下拉框的显示隐藏
    onConfirm() {
      this.$refs.item.toggle();
    },
    onConfirm1() {
      this.$refs.item1.toggle();
    },
    onConfirm2() {
      this.$refs.item2.toggle();
    },
    // 接受导航数据,列表数据
    async hmwGetNav(navCan = "", listCan = 0) {
      console.log(listCan)
      let { data } = await this.$Net.courseNav(navCan);
      let { data: list } = await this.$Net.courseList({ 
        params:{
         order_by:listCan,
         course_type:'',
        }
      });
      console.log(list);
      // 筛选
      this.hmwChoose = data.data.appCourseType;
      // 主体列表
      this.hmwList = list.data.list;
    },
    // 分类每一小项的点击事件-------------------------------------------
    // 当前的id和父级的id
    hmwFlD(i, fuI) {
      console.log(i, fuI);
      // 根据父级判断一下
      if (fuI == 1) {
        // 点击变色
        this.hmwActiveNum1 = i.id;
        sessionStorage.setItem("hmwFlIndex1", i.id);
      } else {
        this.hmwActiveNum4 = i.id;
        sessionStorage.setItem("hmwFlIndex2", i.id);
      }

      // 重新请求渲染页面
      // this.hmwGetNav('attr_val_id='+i.id)
      // 保存一下，页面刷新不改变样式
    },
    // 点击确认-----------------------------------------------------------
    hmwOk() {
      // 关闭窗口
      this.onConfirm();
    },
    // 点击重置-----------------------------------------------------------
    hmwRefresh() {
      this.hmwActiveNum1 = 0;
      this.hmwActiveNum4 = 0;
      // this.hmwActiveNum4 = this.hmwFl[0].child
      sessionStorage.removeItem("hmwFlIndex1");
      sessionStorage.removeItem("hmwFlIndex2");
      // 关闭窗口
      this.onConfirm();
    },
    // 排序的点击事件----------------------------------------------------------------
    async HmwSort(i) {
      // 点击变色
      this.hmwActiveNum2 = i;
      this.hmwGetNav('',i)
// let { data: list } = await this.$Net.courseList({order_by:i});
      // 关闭窗口
      this.onConfirm1();
    },
    // 筛选的点击事件---------------------------------------------------------
    // 这个应该可以有效果了,还是不行
    async HmwChoose(i,index) {
      console.log(i)
      // 点击变色
      this.hmwActiveNum3 = index;
      // 关闭窗口
      this.onConfirm2();
      // 渲染
      let { data: list } = await this.$Net.courseList({ 
        params:{
         course_type:i.id,
        }
      });
      this.hmwList = list.data.list;
    },
    // 跳转到详情页面
    hmwJump(item){
      console.log(item.id)
      // 保存数据到本地
      sessionStorage.setItem('hmwPath',JSON.stringify({path:'/about',name:'About'}))
      sessionStorage.setItem('hmwXQ',JSON.stringify(item))
      // 保存id到本地
      sessionStorage.setItem('hmwXQid',JSON.stringify(item.id))
      this.$router.push('/detail')
    }
  },
  mounted() {
    this.hmwGetNav();
  },
};
</script>

<style scoped>

li {
  list-style: none;
}
/* 大体布局----------------------------------------------------------- */
.hmw-box {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.hmw-center {
  flex: 1;
  overflow: scroll;
}
/* 左边导航拓展样式 --------------------------------------------------------------*/
.hmwNavLeft p {
  padding-top: 0.4rem;
  font-size: 0.23rem;
  /* margin-top: 1rem; */
}
.hmwNavLeft li {
  border-bottom: 1px solid #eee;
}
/* 导航span父级 */
.hmw-nav-tag {
  display: inline-block;
  font-size: 3.46667vw;
  font-weight: 400;
  color: #646464;
  overflow: hidden;
  padding: 0.5rem 0;
}
.hmw-nav-tag span,
.hmwChoose span {
  display: inline-block;
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #f5f5f5;
  margin-bottom: 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.32rem;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: #646464;
}
.hmw-nav-tag .hmwSpanActive span,
.hmwChoose .hmwSpanActive span {
  color: #eb6100;
  background: #ebeefe;
}
/* 按钮部分 */
.hmwNavLeft > div {
  display: flex;
  justify-content: space-between;
}
.hmwNavLeft .van-button {
  width: 48%;
  height: 2rem;
  margin-top: 1rem;
}
/* 中间排序部分 --------------------------------------------------------------------------*/
.hmwCenterNav li {
  text-align: center;
  height: 13.6vw;
  text-align: center;
  line-height: 13.6vw;
  font-size: 3.73333vw;
  font-weight: 400;
  color: #595959;
  border-bottom: 1px solid #f5f5f5;
}
/* 点击的活动页面 */
.hmwCenterNav .hmwsortActive {
  border: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.hmwCenterNav .hmwSpanActive {
  color: #eb6100;
}
/* 最右边部分 */
.hmwChoose {
  padding-top: 2rem;
}

/* 主体部分----------------------------------------------------------------------------------- */
.hmw-main {
  background: #f0f2f5;
  height: 100%;
}
.hmw-main > .van-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hmw-main > .van-list > li {
  width: 84%;
  min-height: 2rem;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 1rem;
}
/* 图片部分卡片布局 -------------------------------------------------------------------------------*/
.hmw-main > .van-list > li > h2 {
  font-size: 4.26667vw;
  font-weight: 400;
  color: #333;
}
.hmw-main > .van-list > li > .hmwP1 {
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: #333;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.hmw-main > .van-list > li > .hmwP1 > .van-icon {
  color: #646464;
  margin-right: 0.3rem;
}
.hmw-main > .van-list > li > .hmwP2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.hmw-main > .van-list > li > .hmwP2 > img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 1rem;
}
.hmwListBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
.hmwListBottom > span {
  padding-right: 2.66667vw;
  color: rgba(0, 0, 0, 0.45);
}
.hmwListBottom > strong {
  color: #44a426;
  font-size: 4.26667vw;
  font-weight: none;
}
/* 报名图片大小 */
.hmw-main .hmwbaoBm{
position: relative;
}
.hmw-main .hmwbaoBm .hmwBm{
position: absolute;
right: -0.5rem;
bottom: 1rem;
width: 15.73333vw !important;
    height: 12.8vw !important;
}
/* 搜索样式 */

.hmw-top .van-nav-bar .van-icon{
    color: #595959;
    font-weight: bold;
}

</style>
