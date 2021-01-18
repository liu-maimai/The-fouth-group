<template>
  <div>
         <div class="sy_te">
      <ul @click="xuexi">
        <li class="zu">0</li>
        <li class="te">我的特色课</li>
        <li class="li">已购买特色课程的学习</li>
      </ul>
      <ul>
        <li class="zu" @click="tese">0</li>
        <li class="te">一对一辅导</li>
        <li class="li">我的一对一老师辅导</li>
      </ul>
      <ul>
        <li class="zu" @click="yu">0</li>
        <li class="te">剩余学习币</li>
        <li class="li">查看剩余学习币</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    
  }
},
methods: {
  xuexi(){
    this.$router.push({path:"/xue"})
  },
  tese(){
    this.$router.push({path:"/solo"})
  },
  yu(){
this.$router.push({path:"/yuer"})
  }
},
}
</script>

<style scoped>
.sy_te {
  width: 100%;
  height: 5rem;
  /* background: chartreuse; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: relative;
  top: -1.5rem;
}
.li {
  font-size: 0.5rem;
  color: rgb(158, 157, 157);
}
.zu {
  font-size: 1.5rem;
  color: #fb5500;
}
.te {
  font-size: 0.9rem;
}
</style>