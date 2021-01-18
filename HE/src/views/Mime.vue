<template>
  <div>
    <Tou></Tou>
    <Te></Te>
    <Bu></Bu>
    <Ke></Ke>
    <Ding></Ding>
    <Zhang></Zhang>
    <Zi></Zi>
    <div class="sy_we">

    </div>
  </div>
</template>

<script>
import Ke from "../components/hhs/ke";
import Te from "../components/hhs/te";
import Button from "../components/vantbutton/vantButton";
import Tou from "../components/hhs/tou";
import Bu from "../components/hhs/bu";
import Ding from "../components/hhs/dingdan";
import Zhang from "../components/hhs/zhanghu"
import Zi from "../components/hhs/zidong"
export default {
  components: {
    Button,
    Zhang,
    Ding,
    Tou,
    Te,
    Bu,
    Ke,
    Zi
  },
  methods: {},
  data() {
    return {};
  },
  mounted() {
   
  },
  beforeRouteEnter (to, from, next) {
    var token=localStorage.getItem("token")
    if(token){
      next()
    }else{
      next("/login")
    }
  }
};
</script>

<style scoped>
.sy_we{
  width: 100%;
  height: 3.6rem;background: black;
}

</style>