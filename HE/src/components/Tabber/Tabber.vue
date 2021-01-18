<template>
  <div class="Tab_box">
    <div v-for="(item, index) in items" :key="index" @click="Onclick(index)">
      <div>
        <img :src="index == Tabindex ? item.imgs : item.img" alt />
      </div>
      <div :class="index == Tabindex ? 'title' : 'Tab_title'">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length <= 6;
        //不能超过6个
      },
    },
  },
  data() {
    return {
      item: this.items,
      Tabindex: localStorage.getItem('Tabindex')  || 0,
    };
  },
  methods: {
    Onclick(index) {
      //这里是根据下标切换 图片样式跟字体颜色 动态绑定
      this.Tabindex = index;
       var temp = this.item[index];
       this.$router.push(temp.path);
      localStorage.setItem('Tabindex',index)
    },
  },
  
};
</script>
<style scoped>
.Tab_box {
  width: 100%;
  height: 3.5rem;
  border: 0.05rem solid gainsboro;
  position: fixed;
  bottom: 0;
  left: 0;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #fff;
}
.Tab_title {
  font-size: 0.8rem;
  font-weight: 400;
}
.title {
  font-size: 0.8rem;
  font-weight: 400;
  color: red;
}
.Tab_box img {
  width: 1.6rem;

}
</style>