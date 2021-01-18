<template>
  <div>
    <div>
      <van-row class="row">
        <van-col class="col1" span="9">
          <van-icon
            size="20"
            name="arrow-left"
            @click="onClickLeft"
            class="item-van-icon"
          />
        </van-col>
        <van-col class="col1" span="9">
          <!-- 计时器 -->
          <div class="tubiao">
            <van-icon size="20" name="clock-o" class="item-van-icon" />
            <div class="time" ref="startTimer"></div>
          </div>
        </van-col>
        <van-col class="col1" span="6">
          <van-icon size="20" name="records" @click="item_right">
            <van-popup
              v-model="showsp"
              position="right"
              :style="{ height: '100%' }"
            >
              <!-- 退出遮罩层 -->
              <van-nav-bar
                title="退出"
                left-text="返回"
                left-arrow
                @click-left="onClickLefts"
              />
              <div class="zmx_div">
                <span v-for="index in 8" :key="index">{{ index }}</span>
              </div></van-popup
            >
          </van-icon>
          <van-icon
            class="icon"
            size="20"
            v-show="isshow"
            @click="shoucang"
            name="like-o"
          />
          <van-icon
            class="icon"
            size="20"
            color="red"
            v-show="show"
            @click="shoucang1"
            name="like-o"
          />

          <van-icon size="20" name="failure" />
        </van-col>
      </van-row>
    </div>
    <div>
      <div class="huaxue">
        <div>化学</div>
        <div>
          <span class="shuzi1">1</span>
          <span>/</span>
          <span>5</span>
        </div>
      </div>
    </div>
    <div class="tiku">
      <div>
        <van-tag mark type="primary">化学</van-tag>
        1.加碘盐通常是在食盐加入物质KIO3，其中碘元素的化合价是
      </div>
      <div class="xuanxiang">
        <br />
        <div>A、-1</div>
        <br />
        <div>B、+1</div>
        <br />

        <div>C、+3</div>
        <br />

        <div>D、+5</div>
        <br />
      </div>
      <div class="fenye">
        <div>
          <button class="button">上一页</button>
        </div>
        <div>
          <button class="button">下一页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      isshow: true,
      show: false,
      showsp: false,
      timer: "",
      content: "",
      hour: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  created() {
    this.timer = setInterval(this.startTimer, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },

  methods: {
    onClickLeft() {
      window.history.back();
    },
    onClickLefts() {
      this.$router.go("-1");
    },
    // 点击右边弹出
    item_right() {
      this.showsp = true;
    },
    //   计时器
    startTimer() {
      this.seconds += 1;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minute = this.minute + 1;
      }

      if (this.minute >= 60) {
        this.minute = 0;
        this.hour = this.hour + 1;
      }
      this.$refs.startTimer.innerHTML =
        (this.minutes < 10 ? "0" + this.minutes : this.minutes) +
        ":" +
        (this.seconds < 10 ? "0" + this.seconds : this.seconds);
    },
    shoucang() {
      this.$toast.success("收藏成功");
      this.isshow = false;
      this.show = true;
    },
    shoucang1() {
      this.isshow = true;
      this.show = false;
      this.$toast("已取消");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.icon {
  margin: 0.2rem 0.8rem;
}
.item-van-icon {
  line-height: 1.8rem;
}
.time {
  width: 3rem;
  height: 2rem;
  line-height: 1.8rem;
  margin: 0 0.08rem;
}
.row {
  font-size: 1rem;
  width: 100%;
  height: 2.5rem;
  color: gray;
}
.zmx_div {
  height: 25vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #000;
}
.zmx_div span {
  width: 4rem;
  height: 4rem;
  background: yellowgreen;
  border-radius: 50%;
  text-align: center;
}
.tubiao {
  display: flex;
  line-height: 2rem;
}
.col1 {
  margin: 0.2rem 0;
  height: 2rem;
}
.huaxue {
  font-size: 1rem;
  width: 98%;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0.1rem;
}
.shuzi1 {
  font-size: 1rem;
  color: blue;
}
.tiku {
  font-size: 1rem;
}
.xuanxiang {
  margin: 0 0.4rem;
}
.fenye {
  display: flex;
  justify-content: space-between;
  height: 0.6rem;
  width: 90%;
  margin: 0 0.15rem;
}
.button {
  width: 5rem;
  height: 1.8rem;
}
</style>