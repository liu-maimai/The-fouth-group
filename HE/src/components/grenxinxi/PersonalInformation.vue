<template>
  <div>
    <NavTitle></NavTitle>
    <div class="waw_hidden"></div>
    <div class="waw_person_container">
      <div class="waw_person_wrapper">
        <div class="waw_img">
          <div class="waw_img_title">头像</div>
          <div class="waw_img_box">
            <img :src="img" />
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeImg"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>昵称</div>
          <div class="waw_user_box">
            <div>
              <span>{{ nickName }}</span>
            </div>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeNickname"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>手机号</div>
          <span class="waw_mobile">{{ user }}</span>
        </div>
        <div class="waw_person">
          <div>性别</div>
          <div class="waw_sex_box">
            <span>{{ sex }}</span>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeSex"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>出生日期</div>
          <div class="waw_time_box">
            <span>{{ time }}</span>
            <van-icon name="arrow" color="lightgray" @click="onClickTime" />
          </div>
        </div>
        <div class="waw_person">
          <div>所在城市</div>
          <div class="waw_address_box">
            <div>
              <span>{{ Address }}</span>
            </div>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeAddress"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>学科</div>
          <div class="waw_subject_box">
            <div>
              <span v-for="(item, index) in subject" :key="index">{{
                item
              }}</span>
            </div>
            <van-icon name="arrow" color="lightgray" @click="onClickSubject" />
          </div>
        </div>
        <div class="waw_person">
          <div>年级</div>
          <div class="waw_class_box">
            <div>小学一年级</div>
            <van-icon name="arrow" color="lightgray" @click="onClickClass" />
          </div>
        </div>
      </div>
    </div>

    <!-- 相册弹出层 -->
    <van-popup v-model="showImg" position="bottom" :style="{ height: '30%' }">
      <div class="waw_popup_box">
        <div class="waw_popup_wrapper">
          <p>拍照</p>
          <p>从手机相册选择</p>
          <p @click="onClickHide">取消</p>
        </div>
      </div>
    </van-popup>

    <!-- 日期弹出层 -->
    <van-popup v-model="showTime" position="bottom" :style="{ height: '45%' }">
      <van-datetime-picker
        @cancel="onCancel"
        @confirm="onConfirm"
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>

    <!-- 地址弹出层 -->
    <van-popup
      v-model="showAddress"
      position="bottom"
      :style="{ height: '45%' }"
    >
      <van-area
        :area-list="areaList"
        @cancel="onClickCancel"
        @confirm="onClickConfirm"
      />
    </van-popup>

    <!-- 学校弹出层 -->
    <van-popup v-model="showClass" position="bottom" :style="{ height: '45%' }">
    </van-popup>
  </div>
</template>
<script>
import NavTitle from "./TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      nickName: "", //昵称
      user: "", //手机号
      img:"",
      sex: localStorage.getItem("sex") || "男", //性别
      time: localStorage.getItem("time") || "2000-10-10", //日期
      Address:
        localStorage.getItem("Address") || "内蒙古自治区 呼和浩特市 武川县", //地址
      subject: JSON.parse(localStorage.getItem("result")) || ["语文"],
      showImg: false, //图片修改（默认隐藏）
      showTime: false, //日期修改（默认隐藏）
      showAddress: false, //修改地址（默认隐藏）
      showClass: false, //修改年级（默认隐藏）
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(1980, 0, 1),
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          // ....
        },
      },
    };
  },
  mounted() {
    var Nick = localStorage.getItem("district_name"); //读取昵称
    if (Nick) {
      this.nickName = Nick;
    }
    var mobile = localStorage.getItem("mobile"); //读取手机号
    if (mobile) {
      this.user = mobile;
    }
    var id=localStorage.getItem("id")
    this.$Net.xiu({
      id:id
    }).then((res) => {
      console.log(res);
      this.img=res.data.data.avatar;
      console.log(this.img);
    });
    // var sex = localStorage.getItem("sex"); //读取性别
    // if (sex) {
    //   this.sex = sex;
    // }
  },
  methods: {
    onClickChangeImg() {
      //点击修改图片(显示)
      this.showImg = true;
    },
    onClickHide() {
      //点击隐藏（图片）
      this.showImg = false;
    },
    onClickChangeNickname() {
      //点击跳转修改昵称页面
      this.$router.push("/nickname");
    },
    onClickChangeSex() {
      //点击跳转页面改变性别
      this.$router.push("/sex");
    },
    onClickTime() {
      //点击修改时间
      this.showTime = true;
    },
    onCancel() {
      //点击修改时间里面的取消
      this.showTime = false;
    },
    onConfirm(value) {
      //点击修改时间里面的确认
      console.log(value);
      var y = value.getFullYear();
      var m = value.getMonth() + 1;
      var d = value.getDate() > 9 ? value.getDate() : "0" + value.getDate();
      this.time = `${y}-${m}-${d}`;
      localStorage.setItem("time", this.time);
      this.showTime = false;
      // console.log(this.time);
    },
    onClickChangeAddress() {
      //点击修改地址
      this.showAddress = true;
    },
    onClickCancel() {
      //隐藏地址
      this.showAddress = false;
    },
    onClickConfirm(obj) {
      //点击修改地址
      console.log(obj);
      this.Address = `${obj[0].name} ${obj[1].name} ${obj[2].name}`;
      localStorage.setItem("Address", this.Address);
      this.showAddress = false;
    },
    onClickSubject() {
      //点击学科
      this.$router.push("/subject");
    },
    onClickClass() {
      //点击从选年级
      this.showClass = true;
    },
  },
};
</script>
<style lang='scss' scoped>
.waw_hidden {
  width: 100%;
  height: 0.5rem;
  background: whitesmoke;
}
.waw_person_container {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}
.waw_person_wrapper {
  width: 94%;
}
.waw_img {
  width: 100%;
  height: 3rem;
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
.waw_img_title {
  font-size: 0.7rem;
  color: gray;
}
.waw_img_box {
  width: 20%;
  height: 100%;
  // background: red;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_img_box img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.waw_person {
  width: 100%;
  height: 3rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: gray;
  border-bottom: 1px solid lightgray;
}
.waw_user_box {
  // background: red;
  width: 80%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
.waw_mobile {
  margin-right: 8%;
}
.waw_sex_box {
  width: 10%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_time_box {
  width: 28%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_address_box {
  width: 90%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
.waw_subject_box {
  // background: red;
  width: 80%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
    span {
      margin-left: 2%;
    }
  }
}
.waw_class_box {
  width: 27%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_popup_box {
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .waw_popup_wrapper {
    width: 94%;
    height: 100%;
    p {
      width: 100%;
      height: 33.3%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid lightgray;
      font-size: 0.8rem;
      color: gray;
    }
  }
}
.van-picker__toolbar {
  width: 100%;
}
</style>