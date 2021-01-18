<template>
  <div>
       <Navbar></Navbar>
         <div>
    </div>
    <!-- <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div> -->
    <!-- <div>
      <van-empty class="div1" description="请稍等，试卷正在赶来的路上啦" />
    </div> -->
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
components:{
    Navbar
},
data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "题目类型", value: 0 },
        { text: '单选', value: 1 },
        { text: '多选', value: 2 },
        { text: '判断', value: 3 },
        { text: '连线', value: 4 },

      ],
  
    };
  },

}
</script>

<style>

</style>