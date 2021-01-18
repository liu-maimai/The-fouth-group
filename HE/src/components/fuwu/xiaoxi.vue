<template>
  <div>
      <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" />
      <div>
          <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/信.png" alt="">
              </li>
              <li class="uu-li">
                  <p>课程通知</p>
                  <p class="uu-p">你报名的课程《李老师18号20号地理大课堂开课<br>啦》已经有3天没有学习了，快去学习吧</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/设置.png" alt="">
              </li>
              <li class="uu-li">
                  <p>系统通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/gou.png" alt="">
              </li>
              <li class="uu-li">
                  <p>订单通知</p>
                  <p class="uu-p">你的课程订单《》取消成功</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/信.png" alt="">
              </li>
              <li class="uu-li">
                  <p>约课通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/写.png" alt="">
              </li>
              <li class="uu-li">
                  <p>考试通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
methods: {
    onClickLeft(){
        this.$router.go("-1")
    }
},
}
</script>

<style scoped>
.uuui{
    width: 100%;
    display: inline-flex;
    color: grey;
}
.uuui img{
    width: 3rem;
    height: 3rem;
    border-radius:50% ;
    position: relative;
    top:1.3rem
}
.uu-li{
    margin-left: 1rem;
}
.uu-p{
    font-size:0.5rem ;
}

</style>