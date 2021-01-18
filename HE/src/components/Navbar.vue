<template>
  <div>
    <van-nav-bar
      title="每时每课"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft(){
          this.$router.go("-1")
        },
        onClickRight(){
            this.$router.push({
                path:"/about"
            })
        }
    }
};
</script>

<style>
</style>