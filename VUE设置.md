# 	一、基础  创建项目，安装依赖

#### 1.创建项目 ：vue create xxx(项目名)

#### 2.安装依赖 ：cnpm i 

   ```javascript
vant 移动端ui库   cnpm i vant --save
 
axios 相当于ajax的异步请求:  cnpm i axios --save

element-ui pc端UI:   cnpm i element-ui --save
 
echarts图表:  cnpm i echarts --save

screenfull全屏:    cnpm i screenfull --save

本地存储（持久化插件）:  	cnpm i vuex-persist --save

mockjs:   cnpm i mockjs -D    

动画库安装： cnpm i animate.css --save
   ```

#### 3.启动项目 ：npm run serve 

```javascript
//main.js 是主体js文件，你所需要的依赖都需要放在这里面

//vant 引入并调用
import vant from "vant"
import 'vant/lib/index.css';
Vue.use(vant)

//axios引入并调用,调用方式为挂载在原型上，这样所以vue项目都可以使用axios
import axios from "axios"
Vue.prototype.$axios=axios

//element-ui 引入并调用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//screenfull全屏 哪个页面需要就在那里引入
import screenfull from 'screenfull'
方法：screen.toggle()

//本地存储（持久化插件）vuex-persist
//在store下的index.js中引入：
import persist from "vuex-persist";
//并在此页面下放入(和state同级)：
plugins: [
    new persist({
        storage: window.localStorage,
    }).plugin,
],

//mock.js引入并调用
//在src文件夹下创建一个mock文件夹，在index.js中配置：
import Mock from "mockjs";
import data from "json文件";
Mock.mock("/cate", "get", () => {
 		return data;
});// /cate是我们自己模拟的接口

//echarts图表引用并调用
//引入 在哪里使用在哪里引入 
//import echarts from "echarts";目前用不了
var echarts=require('echarts')
//准备一个容器 div 存放图表 这个div需要有宽高

//引入动画
import 'animate.css'
```

# 二、解决router中的push方法出现的bug

```javascript
//在router.js中配置的路由下方放入（为了防止router中push方法的bug出现）：
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  if (typeof (location) == "string") {
    var Separator = "&";
    if (location.indexOf('?') == -1) {
      Separator = '?';
    }
    location = location + Separator + "random=" + Math.random();
  }
  return routerPush.call(this, location).catch(error => error)
}
```

# 三、css 的一些样式

```scss
<style lang="scss" scoped>
//display实现顶部底部定位
html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: calc(100% - 96px);
    margin-top: 50px;
    .content {
        flex: 1;
        overflow: auto;
    }
}
//css样式 鼠标滑过让div卡片抬起放大 有阴影
.el-col:hover {
    transition: all 1s;
    box-shadow: 5px 5px 5px #888888;
    transform: scale(1.02);//变为原来的1.02倍
}
//让多余的字体变为省略号
p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
//让详情页图文数据适应屏幕大小
.del {
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        /deep/ul {
            height: auto;
            li {
                width: 100%;
                p {
                    width: 100%;
                    height: 30px;
                }
            }
        }
        /deep/p {
            width: 100%;
        }
        /deep/img {
            width: 100% !important;
            height: 100% !important;
        }
    }
</style>
```

# 四、解决接口的跨域问题

```javascript
//方式一
//在项目的根目录下创建一个vue.config.js文件写入：
module.exports = {
 		devServer: {
     		proxy: 'https://m.douyu.com/api/'
 		},
}
//在页面中请求时，把参数拼接上
this.$axios.get('参数地址')
//$axios要和挂载在原型上的$axios对应

//方式二
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://47.115.85.237:3000/', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

# 五、移动端事件

### 1、价格排序

```javascript
//对价格进行排序  shop是商品数据
        up() {
            this.shop.sort((a, b) => {
                return a.price - b.price;
            });
        },
        down() {
            this.shop.sort((a, b) => {
                return b.price - a.price;
            });
        },
```

### 2、搜索页面事件 添加删除历史记录  有下拉列表

```html
<!--搜索框-->
<div class="search">
            <van-search
                class="left"
                v-model="value"
                placeholder="请输入搜索关键词"
                @search="search"
                @keyup="fil"
            />
            <van-button type="primary" class="right" @click="search"
                >搜索</van-button
            >
            <van-list class="list">
                <van-cell v-for="item in reslist" :key="item" :title="item" />
            </van-list>
        </div>

        <h5>历史记录 <van-icon @click="remove" name="cross" /></h5>
        <van-panel>
            <div
                v-for="(item, index) in history"
                :key="index"
                v-show="index < 3"
            >
                {{ item }}
            </div>
        </van-panel>
```

```javascript
import { Dialog } from "vant";
export default {
    data() {
        return {
            list: [
                "北京北",
                "北京南",
                "北京西",
                "北京东",
                "昌平西",
                "昌平东关",
                "昌平南关",
            ],
            reslist: [],
            value: "",
            history: JSON.parse(localStorage.getItem("history")) || [],
        };
    },
    methods: {
        fil() {
            if (this.value != "") {
                this.reslist = this.list.filter((item) => {
                    return item.includes(this.value);
                });
            } else {
                this.reslist = [];
            }
        },
        search() {
            this.history.unshift(this.value);
            localStorage.setItem("history", JSON.stringify(this.history));
            console.log(this.value);
            this.$router.push({ path: "/searchend", query: { value: this.value } });
        },

        remove() {
            Dialog.confirm({
                title: "删除",
                message: "确认删除历史记录",
            })
                .then(() => {
                    this.history = [];
                    localStorage.removeItem("history");
                })
                .catch(() => {
                });
        },
    },
};
```

```scss
<style lang="scss" scoped>
.search {
    display: flex;
    align-items: center;
    position: relative;
    > .list {
        position: absolute;
        left: 0px;
        top: 50px;
        width: 100%;
        z-index: 10;
    }
    .left {
        flex: 5;
    }
    .right {
        flex: 1;
        height: 35px;
    }
}
h5{
    text-align: center;
}
</style>
```

### 3、搜索结果页面  接收搜索关键词 渲染数据

```html
  <van-nav-bar
            title="搜索结果页面"
            left-text="返回"
            left-arrow
            @click-left="to"
        />
        <h5>搜索结果页 搜索关键字是{{ $route.query.value }}</h5>
        <van-card
            v-for="item in reslist"
            :key="item.id"
            :title="item.title"
            :thumb="item.img"
        />
```

```js
<script>
export default {
    data() {
        return {
            list: [],
            reslist: [],
        };
    },
    mounted() {
        this.$axios.get("/data.json").then((res) => {
            this.list = res.data.data;
            this.list.forEach((item) => {
                if (item.title.includes(this.$route.query.value)) {
                    this.reslist.push(item);
                }
            });
        });
    },
    methods: {
        to() {
            this.$router.go(-1);
        },
    },
};
</script>
```

### 4、转场动画(app.vue)

```html
<transition
enter-active-class="animate__animated animate__slideInRight animate__faster"
leave-active-class="animate__animated animate__slideOutLeft animate__faster"
>
    <router-view class="page"></router-view>
</transition>
```

```scss
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.page{
    width: 100%;
    position: absolute;
    left: 0;
    overflow: auto;
}
//其他页面都是wrap包裹content盒子，content是活动窗口
.wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: calc(100% - 96px);//中间盒子高度，100%减去顶部和底部高度
    margin-top: 50px;
    .content {
        flex: 1;
        overflow: auto;
    }
}
</style>
```

# 六、vuex购物车案例

## 移动端购物车

### 1.购物车页面布局

```html
<van-checkbox-group v-model="result" ref="checkboxGroup" @change="select">
	<van-swipe-cell v-for="item in $store.state.shoplist" :key="item._id">
		<van-row>
            <!-- 复选框 -->
			<van-col span="3">
				<van-checkbox :name="item"></van-checkbox>
			</van-col>
			<van-col span="21">
                <!--商品卡片 -->
				<van-card :price="item.price" :title="item.title" :thumb="item.s_pic">
					<!--步进器 插槽 -->
                    <template #footer>
						<van-stepper v-model="item.num" :name="item._id" 									@change="change"/>
					</template>
				</van-card>
			</van-col>
		</van-row>
        <!--删除购物车商品 插槽 -->
		<template #right>
			<van-button square text="删除" type="danger" @click="remove(item)" 				class="delete-button"/>
		</template>
	</van-swipe-cell>
</van-checkbox-group>
```

```javascript
data(){
    return{
        value:1,
        checked:false,
        result:[]
    }
}
```

```html
<style lang="scss" scoped>
.goods-card {
    margin: 0;
    background-color: white;
}

.delete-button {
    height: 100%;
}
.van-row {
    display: flex;
    align-items: center;
}
.van-checkbox {
    justify-content: center;
}
</style>
```

### 2.添加商品到购物车

```html
<!-- 在商品页给商品一个购物车图标，当点击图标时，添加到购物车 -->
<template #footer>
	<van-icon name="cart" size="30" @click.stop="add(item)"/>
</template>
```

```javascript
//在商品页写     添加购物车的事件   
add(item){
	this.$store.commit("add",item)
	// commit 调用方法 向state中的shoplist传递参数item
}
```

```javascript
//在store下的index.js下写  接收item将此商品加入shoplist 

  // state  相当于组件中的data
  // state 组件使用调用 this.$store.store.xxx
  state: {
    shoplist: [],
  },
  // mutations 相当于methods 只有在mutations中操作state
  // mutations 在组件使用调用 this.$store.commit("方法名"，传递的参数)
  // 在mutations中使用   方法名（state,接受的参数） 
  mutations: {
	// 添加购物车
    add(state, item) {
      let flag = false //代表此商品在购物车数据中是否存在
      state.shoplist.forEach(i => {
        // 当新添加的商品和已有商品id相同时，让数量加1
        if (i._id == item._id) {
          i.num++
          flag = true
          return false
        }
      })
      if (flag == false) {
        // 如果没有商品，添加一条
        Vue.set(item, "num", 1);
        state.shoplist.push(item)
        Toast('添加成功！');
      }
    },
}
```

### 3.步进器  实现商品的加减

```html
<!-- 在购物车页面写    给商品卡片部分一个插槽，放入步进器 -->
<template #footer>
	<van-stepper v-model="item.num" :name="item._id" @change="change"/>
</template>
```

```javascript
//在购物车页面写
data() {
        return {
            //步进器的初始数值
            value: 1,
        };
    },
    methods: {
        // 当点击步进器时，改变商品数量
        change(val, detail) {
            this.$store.commit("change", { num: val, id: detail.name });
            // 若要传递多个参数，必须是对象形式，否则传不过去
        },
    },
```

```javascript
//在store下的index.js下写   
//实现购物车商品的加加减减
mutations:{	
    change(state, obj) {
      // 循环加入购物车的商品
      state.shoplist.forEach(item => {
        // 若购物车商品id等于传递过来的商品id时，
        // 把传递过来的商品数量赋值给购物车商品数量，实现加加减减功能
        if (item._id == obj.id) {
          item.num = obj.num
        }
      })
    }
}
```

### 4.删除购物车单个商品

```html
<!--在购物车页面写 删除购物车商品 插槽 -->
<template #right>
	<van-button square text="删除" type="danger" @click="remove(item)" class="delete-button"/>
</template>
```

```javascript
//在购物车页面写   删除单个商品
remove(item) {
	this.$store.commit("remove", item);
	this.select();
},
```

```javascript
//在store下的index.js下写 
//实现购物车单个商品的删除
remove(state, i) {
	state.shoplist.forEach((item, index) => {
		if (item._id == i._id) {
			state.shoplist.splice(index, 1);
		}
	});
},
```

### 5.全选、反选事件和计算总价事件

```html
<!--在购物车页面写-->
<van-checkbox-group v-model="result" ref="checkboxGroup" @change="select">
    商品卡片
</van-checkbox-group>
<van-submit-bar :price="allprice * 100" button-text="提交订单">
	<van-checkbox v-model="checked" @click="changeall">全选</van-checkbox>
</van-submit-bar>
```

```javascript
//在购物车页面写
methods:{
    // 全选事件
	select(val) {
		if ( this.$store.state.shoplist.length ==this.result.length&&
			this.$store.state.shoplist.length != 0) {
			this.checked = true;
		} else {
			this.checked = false;
		}
	},
	// 全选的反选
 	changeall() {
		this.$refs.checkboxGroup.toggleAll(this.checked);
	},
},
//监听属性  监听价格变化
computed:{
	allprice() {
		let sum = 0;
        this.result.forEach((item)=>{
			sum += item.price * item.num;
		})
		return sum
	}
},
```

## PC端购物车

### 1、购物车页面布局

```html
<el-table ref="multipleTable" :data="this.$store.state.shoplist" tooltip-effect="dark" style="width: 100%">
    <el-table-column type="selection" width="100"> </el-table-column>
    <el-table-column label="图片" width="120">
        <template slot-scope="scope">
            <img :src="scope.row.img_url" width="50px" height="50px" />
        </template>
    </el-table-column>
    <el-table-column prop="title" label="机型" width="400">
    </el-table-column>
    <el-table-column prop="" label="价格" width="150">
        <template slot-scope="scope">
            ￥{{ scope.row.market_price }}
        </template>
    </el-table-column>
    <el-table-column prop="" label="小计" width="150">
        <template slot-scope="scope">
            ￥{{ scope.row.market_price * scope.row.num }}
        </template>
    </el-table-column>
    <el-table-column label="计算" width="320">
        <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="change" :min="1" :max="10">
            </el-input-number>
        </template>
    </el-table-column>
    <el-table-column label="操作" width="120">
        <template slot-scope="scope">
            <el-button type="primary" @click="remove(scope.row.id)">删除</el-button>
        </template>
    </el-table-column>
</el-table>
<h2>
    <span>
        总价：<big>￥{{ allprice }}</big>
    </span>
</h2>
```

```javascript
data() {
        return {
            num: "",
        };
    },
    computed: {
        allprice() {
            var num = 0;
            this.$store.state.shoplist.forEach((item) => {
                num += item.num * item.market_price;
            });
            return num;
        },
    },
```

```scss
<style lang="scss" scoped>
h2 {
    float: right;
    margin-right: 50px;
    big{
        color: red;
    }
}

</style>
```

### 2、添加商品

```html
<!-- 商品页面 添加购物车按钮 -->
<el-button type="warning" plain @click="add(item)">
    加入购物车
</el-button>
```

```javascript
// 添加购物车
add(item) {
    if(localStorage.getItem("token")) {
        this.$store.commit("add", item);
        this.$notify.success({
            title: "添加成功",
            showClose: false,
            duration: "2000",
        });
    } else {
        this.$notify.warning({
            title: "你还未登录 不能添加商品 请先登录！",
            showClose: false,
            duration: "2000",
        });
    }
},
```

```javascript
//在vuex里面写 
state: {
    shoplist: [],
},
mutations:{
    // 添加购物车
    add(state, item) {
      let flag = false
      state.shoplist.forEach(i => {
        if (i.id == item.id) {
          i.num++
          flag = true
          return false
        }
      })
      if (flag == false) {
        Vue.set(item, "num", 1);
        state.shoplist.push(item)
      }
    },
}
```

### 3、步进器 实现商品的加减

```html
<!--购物车页面 步进器-->
<el-table-column label="计算" width="320">
    <template slot-scope="scope">
        <el-input-number v-model="scope.row.num" @change="change" :min="1" :max="10">
        </el-input-number>
    </template>
</el-table-column>
```

```javascript
// 当点击步进器时，改变商品数量
change(value, detail) {
    this.$store.commit("change", { num: value, id: detail });
},
```

```javascript
// 步进器 商品数量的加减
change(state, obj) {
    state.shoplist.forEach(item => {
        if (item.id == obj.id) {
            item.num = obj.num
        }
    })
},
```

### 4、删除购物车单个商品

```html
<!--删除小图标-->
<el-table-column label="操作" width="120">
    <template slot-scope="scope">
        <el-button type="primary" @click="remove(scope.row.id)">
            删除
        </el-button>
    </template>
</el-table-column>
```

```javascript
//购物车页面
 //删除单个商品
remove(id) {
    this.$store.commit("remove", id);
    this.$notify.warning({
        title: "删除成功！",
        showClose: false,
        duration: "2000",
    });
},
```

```javascript
//vuex 里面
// 删除购物车商品
remove(state, id) {
    state.shoplist.forEach((item, index) => {
        if (item.id == id) {
            state.shoplist.splice(index, 1);
        }
    });
},
```

### 5、收藏页布局

```html
<el-row :gutter="20">
    <el-col :span="4" v-for="item in this.$store.state.shop" :key="item.id">
        <div class="grid-content">
            <img :src="item.img_url" />
            <b>{{ item.title }}</b>
            <p>
                <big>￥{{ item.sell_price }}</big>
                <s>￥{{ item.market_price }}</s>
                <span>已售{{ item.stock_quantity }}件</span>
            </p>
            <p>
                <el-button type="danger" plain @click="del(item.id)">取消收藏</el-button>
            </p>
        </div>
    </el-col>
</el-row>
```

```scss
<style lang="scss" scoped>
.el-row {
    margin: 20px 0;
    padding-top: 10px;
    background: rgb(243, 243, 243);
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col:hover {
    transition: all 1s;
    box-shadow: 5px 5px 5px #888888;
    transform: scale(1.02);
}
.el-col {
    border-radius: 4px;
    margin-bottom: 10px;
    border-radius: 15px;
    height: 340px;
    .grid-content {
        background-color: #fff;
        border-radius: 15px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        img {
            width: 100%;
            border-radius: 15px;
        }
        b {
            display: inline-block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p {
            padding: 5px;
            .el-button {
                margin-left: 55px;
            }
        }
        big {
            color: red;
        }
        s,
        span {
            color: gray;
        }
    }
}
</style>
```

### 6、添加收藏

```html
<!-- 商品页面 -->
<el-button type="danger" plain @click="collect(item)">收藏</el-button>
```

```javascript
//商品页面
collect(item) {
    this.$store.commit("collect", item);
    this.$notify.success({
        title: "收藏成功",
        showClose: false,
        duration: "2000",
    });
},
    
//vuex页面
shop:[],
collect(state, item) {
    let flag = false
    state.shop.forEach(i => {
        if (i.id == item.id) {
            flag = true
            return false
        }
    })
    if (flag == false) {
        state.shop.push(item)
    }
},
```

### 7、取消收藏

```html
<!--都是收藏页-->
<el-button type="danger" plain @click="del(item.id)">取消收藏</el-button>
```

```javascript
methods: {
    del(id) {
        this.$store.commit("del", id);
        this.$notify.warning({
            title: "已取消收藏！",
            showClose: false,
            duration: "2000",
        });
    },
},
//vuex中
del(state, id) {
    state.shop.forEach((item, index) => {
        if (item.id == id) {
            state.shop.splice(index, 1);
        }
    });
}
```

# 七、学生管理、后台管理页面案例

### 1、若有登录页面，让公共头部消失(如果在app.vue里面写的导航)

```html
<el-header v-show="show">表头内容</el-header>
```

```javascript
 data() {
        return {
            show: false,
        };
    },
 watch: {
        $route: {
            handler(newval, oldval) {
                console.log(newval, oldval);
                if (newval.path == "/login") {
                    this.show = false;
                } else {
                    this.show = true;
                }
            },
        },
        //监听路由 handler是watch的完整写法 是执行函数的意思
        // 如果是登陆页面就让头部的导航隐藏 如果不是登陆页面就显示头部导航
    },
```

### 2、全屏事件

```html
<!-- 给一个点击事件 点击时执行全屏方法 -->
<i class="el-icon-rank" style="font-size: 40px" @click="screen"></i>
```

```javascript
// 引入全屏组件
import screenfull from "screenfull";
methods: {
	 screen() {
		screenfull.toggle();
		//toggle是反转的意思 在全屏和退出全屏之间切换
	},
},
```

### 3、用户名存储、删除

```html
<el-menu-item>
    欢迎登录{{ $store.state.user.username }}
</el-menu-item>
<el-menu-item @click="logout">退出</el-menu-item>
```

```javascript
//登录页面
data() {
    return {
        form: {
            username: "",
            password: "",
        },
    };
},
//登录事件
onSubmit() {
    if (
        this.form.username == "jiyun" &&
        this.form.password == "password"
    ) {
        //登录为接口时 用const obj 来传递这个对象
        const obj = {
            userName: this.form.username,
            password: this.form.password,
        };
        // getLogin 是请求登录的信息
        getLogin(obj).then((res) => {
            this.$store.commit("onSubmit", this.form);
            localStorage.setItem("token",JSON.stringify(this.form));
            this.$router.push({ path: "/home" });
            this.dialogVisible = false;
            Toast("登录成功！");
        });
    } else if (this.username == "") {
        Toast("您还未输入用户名！");
    } else if (this.password == "") {
        Toast("您还未输入密码！");
    }else if (this.password != "password"||this.userName != "jiyun") {
        Toast("用户名或密码错误！");
    }
},
// 退出登录
logout() {
    if (localStorage.getItem("token")) {
        this.$store.commit("logout");
        localStorage.removeItem("token");
        Toast("成功退出！");
    } else {
        Toast("您还未登录！");
    }
},

//vuex里面写
state: {
    user: [],
  },
mutations:{
    // 登录事件
    onSubmit(state, val) {
      state.user = val
    },
    // 退出登录 并删除user信息
    logout(state){
        state.user=[]
    },
}
//以为onsubmit中的getLogin是函数需要调用一下
created() {
    this.onSubmit();
},
```

### 4、规定时间内token失效删除

```javascript
//在main.js中
function removeToken() {
  setTimeout(() => {
    localStorage.removeItem('token')
  }, 5000);
}
Vue.prototype.removeToken = removeToken
//登录页面
<button @click="login">登录</button>
methods:{
        login() {
            this.$http.post('https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=' + this.mobile + '&pwd=' + this.pwd).then(res => {
                localStorage.setItem('token', res.data.data.token)
                this.removeToken()//调用此方法！！！！！！！
            })
        }
    },
```

### 5、多个页面路由拦截

```js
{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      isLogin: true
    },
    component: () => import('../views/Cart.vue')
  },
 //拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```



### 6、面包屑

```javascript
//创建一个组件crumb
<template>
    <div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/student' }">
            后台首页
		</el-breadcrumb-item>
		<el-breadcrumb-item>
            {{title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:"",
    }
  },
    watch:{
      $route:{
        handler(newval){
          this.title=newval.meta.title
        }
      }
    }
}
</script>
//在需要使用面包屑的地方引入组件
<crumb></crumb>//放在router-view上方
```

### 7、echarts图表

```javascript
<template>
    <div>
        <h1>统计页面</h1>
        <div id="main" style="width: 600px; height: 400px"></div>
    </div>
</template>
<script>
var echarts=require('echarts')
export default {
    data() {
        return {
            option: {},
        };
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart =echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
    },
};
</script>
```

### 8、分页

```html
 <!-- 分页效果 -->
<el-pagination
 	@size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pagenum"
    :page-sizes="[1, 2, 3, 4, 5]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="list.length">
</el-pagination>
<!--  list: [], // 需要展示的学生数据集合
	  copylist:[],//将学生数据复制存放
-->
```

```javascript
data:{
    return:{
        pagesize: 4, //分页效果里每页展示多少条数据
        pagenum: 1, //分页效果里 当前的页码值
    }
}
methods:{
    // 改变当前的页码值
    handleCurrentChange(val) {
        this.pagenum = val;
    },
    // 改变当前页码需要显示的数量
    handleSizeChange(val) {
    	this.pagesize = val;
    },
}
```

### 9、侧边栏收起

```html
<!-- 侧栏宽度auto -->
<i class="el-icon-s-fold" style="font-size: 30px;margin-left:20px" @click="isCollapse = !isCollapse" ></i>
```

```javascript
//el-menu里面加入
:collapse="isCollapse"
//条件
data() {
    return {
        isCollapse: true,
    };
},
```

