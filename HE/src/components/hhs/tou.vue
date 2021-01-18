<template>
  <div>
    <div class="sy_orange"></div>
    <div class="sy_top">
      <div class="sy_top1">
        <p class="sy_img">
          <img
            v-show="district_name.length <= 0"
            src="../../assets/头像.png"
            alt=""
          />
          <img
            v-show="district_name.length > 0"
            :src="list.avatar"
            alt=""
            @click="ge"
          /><span
            v-show="district_name.length <= 0"
            class="s1"
            @click="denglv"
            >登录/注册</span
          >
          <span v-show="district_name.length > 0" class="s1" @click="ge">{{
            district_name
          }}</span>
        </p>
        <button class="sy_bu" @click="quyue">去约课</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      district_name:""
    };
  },
  methods: {
    denglv() {
      this.$router.push({ path: "/login" });
    },
    ge() {
      var district_name=localStorage.setItem("district_name",this.district_name)
      var mobile=localStorage.setItem("mobile",this.list.mobile)
      var token = localStorage.getItem("token");
      if (token) {
        this.$router.push({ path: "/per" });
      } else {
        this.$router.push("/login");
      }
    },
    quyue() {
      this.$router.push({ path: "/make" });
    },
  },
  mounted() {
        this.$Net
        .xuue({
          params: {},
        })
        .then((res) => {
          console.log(res);
          this.list = res.data.data;
          this.district_name=res.data.data.district_name
        });
  },
};
</script>

<style scoped>
.sy_orange {
  width: 100%;
  height: 13vh;
  background-color: #fb5500;
  border-radius: 0px 0px 25px 25px;
}
.sy_top {
  width: 90%;
  position: relative;
  top: -3rem;
  left: 20px;
}
.sy_top1 {
  width: 100%;
  height: 10.5vh;
  background: white;
  border-radius: 5px;
}
.sy_img {
  position: absolute;
  left: 1rem;
  top: 1rem;
}
.sy_img img {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
}
.sy_img .s1 {
  position: relative;
  top: -1.8rem;
  left: 0.4rem;
}
.sy_top .sy_bu {
  width: 3.5rem;
  height: 1.5rem;
  font-size: 0.5rem;
  color: white;
  background-color: #fb5500;
  border: 0px;
  border-radius: 10px 0px 0px 10px;
  position: absolute;
  top: 3rem;
  right: 0rem;
}
</style>