<template>
  <div class="box">
    <van-nav-bar
      title="初三化学一模拟考试题"
      @click-left="onClickLeft"
      left-arrow
    >
    </van-nav-bar>
    <div class="tiku">
      <van-row>
        <van-col class="col" span="2"
          ><van-icon size="22" name="column"
        /></van-col>
        <van-col class="wenz" span="20" @click="onclick">题库选择</van-col>
        <van-col class="col" span="2">
          <van-icon size="22" name="setting-o" @click="van" />
        </van-col>
      </van-row>
      <div class="box-div">
        <van-row class="box-div1">
          <van-col span="3"><button class="button">-</button></van-col>
          <van-col span="18">
            <div class="huaxue">化学</div>
            <div>
              <van-progress pivot-text="" color="#f2826a" :percentage="75" />
            </div>
          </van-col>
          <van-col span="3"
            ><van-icon @click="jiantou" class="jiantou" name="arrow"
          /></van-col>
        </van-row>
      </div>
      <!-- 点击    底部弹出层 -->
      <van-popup
        class="bottomshowbox"
        v-model="show"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <div class="tly_bottomshowbox">
          <p class="item-p">考点专练设置</p>
          <p class="item-p-p">设置考点专练出题数量</p>
          <div class="tly_contentbox">
            <van-radio-group v-model="radio">
              <van-radio name="1">随机十五道</van-radio>
              <van-radio name="2">按顺序做题 </van-radio>
            </van-radio-group>
          </div>
          <div class="tly_bottombox">
            <van-button type="danger" @click="down"  v-model="isshow">确定</van-button>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      radio: "1",
      isshow:true
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onclick() {
      this.$router.push({
        path: "/kaodian",
      });
    },
    jiantou() {
      this.$router.push({
        path: "/exect",
      });
    },
    van() {
      this.show = true;
    },
    down(){
 this.show = false;
    }
  },
};
</script>

<style scoped>
.tiku {
  margin-top: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  height: 90vh;
  vertical-align: middle;
  background: white;
}
.van-row {
  margin-bottom: 1rem;
}
.col {
  line-height: 1rem;
}
.wenz {
  line-height: 1rem;
}
.box {
  width: 100%;
  height: 100vh;

  /* background: rgb(224, 231, 230); */
}
.box-div {
  width: 100%;
  font-size: 1.2rem;
}
.box-div1 {
  border-radius: 0.05rem;
  width: 93%;
  margin: 0.08rem;
  height: 4rem;
  border: 0.01rem solid gray;
}
.button {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: none;
  background: rgb(199, 198, 198);
  color: white;
  text-align: center;
  margin: 0.8rem 0.4rem;
}
.huaxue {
  margin: 0.2rem 0;
}
.jiantou {
  margin: 1.3rem 0.8rem;
}
/* 底部弹出层 */
.bottomshowbox {
  box-sizing: border-box;
  padding: 0.5rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
/* .tly_bottomshowbox{
  
  border: 1px solid #000;
} */
.van-button {
  width: 100%;
}
.tly_bottombox {
  width: 100%;
  height: 2rem;
}
.van-radio {
  width: 50%;
  height: 3rem;
}
.van-radio-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
}
.tly_contentbox {
  width: 100%;
height: 4.5rem;
}
.item-p {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
}
.item-p-p{
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.5rem;
  padding: 0.5rem;
}
</style>
