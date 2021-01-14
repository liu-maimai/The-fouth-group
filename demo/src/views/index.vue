<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" router>
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="/course"
                >课程</van-tabbar-item
            >
            <van-tabbar-item icon="qr-invalid" to="/order"
                >约课记录</van-tabbar-item
            >
            <van-tabbar-item icon="orders-o" to="/exercise"
                >练习</van-tabbar-item
            >
            <van-tabbar-item icon="friends-o" to="/person"
                >我的</van-tabbar-item
            >
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style></style>
