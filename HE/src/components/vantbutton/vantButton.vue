<template>
  <div>
    <van-grid
    :column-num="columnNum"
    >
      <van-grid-item 
      v-for="(item,index) in data" 
      :key="index" 
      :icon="item.icon" 
      :text="item.name" 
      @click="onclick(item.path)"
      />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
export default {
  props:{
    columnNum:{
      type:String,
      default:'4'
    },
    data:{
      type:Array,
      required:true,
    }
  },

  component: {
    Grid,
    GridItem,
  },
  
  methods: {
    onclick(path){
      this.$router.push(path)
    }
  },
};
</script>

<style>
</style>