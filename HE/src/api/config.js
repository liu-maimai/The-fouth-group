//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post',
        Put: 'put'
    },
    //定义请求地址
    Path: {
        // HMWFL: '/api/app/courseClassify',
        LOGIN: '/api/app/login',
        // 课程导航
        HMWFL: '/api/app/courseClassify',
        // 课程列表
        HMWLIST: '/api/app/courseBasis?page=1&limit=10&',
        // 课程详情数据
        HMWXQ: '/api/app/courseInfo/basis_id=109',
        // 课程收藏操作
        HMWSC: '/api/app/collect',
        // 取消收藏（怎么会有问题？）
        HMWSCNO: '/api/app/collect/cancel/227/1',
        // 课程评价数据获取
        HMWPJ: '/api/app/courseComment',
        //首页列表
        List: '/api/app/recommend/appIndex',
        //个人信息
        XUE: '/api/app/userInfo',
        //特色课
        TE: "/api/app/courseBasis?page=1&limit=10&",
        //我的关注
        GUAN: "/api/app/collect",
        KE: "/api/app/courseInfo/basis_id=189",
        //学习
        Xue: "/api/app/myStudy/2",
        //首页推荐老师列表
        HomeLIST: '/api/app/teacher/info/id',
        //验证码登录
        YAN: "/api/app/login",
        //修改个人信息
        XIU: "/api/app/user",
        //设置密码
        SHE: "/api/app/smsCode",
        //课程收藏
        CANG: "/api/app/collect",
        //课程取消收藏
        CANCEL: "/api/app/collect/cancel/227/1",
        //教师详情
        SHI: "/api/app/teacher/",
        // 练习页面的套卷练习
        LIANXI: "/api/app/wap/classify",
        // 轮播图
        LUNBO:"/api/app/banner",
         // 考点练习里面的题库选择
         TIKU:"/api/app/wap/quesBank/",
         CEP:"/api/app/examStatistics/detail"
    }
}

export default API
