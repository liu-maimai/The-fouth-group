<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />
    <div>
      <div class="sy-ddd">
        <ul class="wu-sy">
          <li><img src="../../assets/icon/avatar.jpg" alt="" /></li>
          <li>
            <p>毛赵燕 <span class="sp">M6</span></p>
            <p class="pp">教学风格：尤其擅长阅读教学，...</p>
          </li>
        </ul>
        <button class="guanzhu">取消关注</button>
      </div>
      <div class="sy-ddd">
        <ul class="wu-sy">
          <li>
            <img src="../../assets/icon/2019wX5ZNRNxBT1577773182.jpg" alt="" />
          </li>
          <li>
            <p>文为星 <span class="sp">M20</span></p>
            <p class="pp">文为星，江苏沐阳县人，上海市，...</p>
          </li>
        </ul>
        <button class="guanzhu">取消关注</button>
      </div>
      <div class="sy-ddd">
        <ul class="wu-sy">
          <li>
            <img src="../../assets/icon/20192TSKKmyNso1572684453.png" alt="" />
          </li>
          <li>
            <p>马学斌 <span class="sp">M20</span></p>
            <p class="pp">马学斌老师，从2004年起，专注，...</p>
          </li>
        </ul>
        <button class="guanzhu">取消关注</button>
      </div>
      <div class="sy-ddd">
        <ul class="wu-sy">
          <li><img src="../../assets/icon/avatar.jpg" alt="" /></li>
          <li>
            <p>毛赵燕 <span class="sp">M6</span></p>
            <p class="pp">教学风格：尤其擅长阅读教学，...</p>
          </li>
        </ul>
        <button class="guanzhu">取消关注</button>
      </div>
    </div>
    <p class="mei">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      type: 2,
    };
  },
  mounted() {
    this.$Net
      .guan({
        params: {
          type: this.type,
        },
      })
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
  },
};
</script>

<style scoped>
.wu-sy {
  display: inline-flex;
}
.wu-sy img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  top: 1rem;
}
.sy-ddd {
  width: 100%;
  height: 4rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.guanzhu {
  width: 5rem;
  font-size: 0.5rem;
  background: #fdefe5;
  border-radius: 20px;
  color: orange;
  border: 0px;
}
.pp {
  font-size: 0.5rem;
  color: rgb(180, 179, 179);
}
.sp {
  color: orange;
}
.mei {
  font-size: 0.5rem;
  color: rgb(180, 179, 179);
  text-align: center;
}
</style>