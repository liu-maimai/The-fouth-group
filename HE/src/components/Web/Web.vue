<template>
    <div id="webId">
        <!-- 1.1 如果碰到滑动问题，请检查这里是否属于同一点。 -->
        <!-- 悬浮的HTML -->
        <div
                class="xuanfu"
                id="moveDiv"
                @mousedown="down()"
                @touchstart="down()"
                @mousemove.prevent.stop="move()"
                @touchmove.prevent.stop="move()"
                @mouseup="end()"
                @touchend="end()"
                @click="liuyan()"
        >
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1694461754,1781880229&fm=26&gp=0.jpg" width="100%"/>
        </div>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                flags: false,
                position: { x: 0, y: 0 },
                nx: "",
                ny: "",
                dx: "",
                dy: "",
                xPum: "",
                yPum: "",
            };
        },

        methods: {
            // 实现移动端拖拽
            down() {
                this.flags = true;
                let touch;
                if (event.touches) {
                    touch = event.touches[0];
                } else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.dx = moveDiv.offsetLeft;
                this.dy = moveDiv.offsetTop;
            },
            move() {
                if (this.flags) {
                    let touch;
                    if (event.touches) {
                        touch = event.touches[0];
                    } else {
                        touch = event;
                    }
                    this.nx = touch.clientX - this.position.x;
                    this.ny = touch.clientY - this.position.y;
                    this.xPum = this.dx + this.nx;
                    this.yPum = this.dy + this.ny;
                    //添加限制：只允许在屏幕内拖动
                    
                    //屏幕宽度减去悬浮框宽高
                    const maxWidth = document.body.clientWidth - 54; 
                    const maxHeight = document.body.clientHeight - 54;
                    if (this.xPum < 0) {
                        //屏幕x限制
                        this.xPum = 0;
                    } else if (this.xPum > maxWidth) {
                        this.xPum = maxWidth;
                    }
                    if (this.yPum < 0) {
                        //屏幕y限制
                        this.yPum = 0;
                    } else if (this.yPum > maxHeight) {
                        this.yPum = maxHeight;
                    }
                    moveDiv.style.left = this.xPum + "px";
                    moveDiv.style.top = this.yPum + "px";
                    //阻止页面的滑动默认事件
                    document.addEventListener(
                        "touchmove",
                        function () {
                            // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
                            // event.preventDefault(); //jq 阻止冒泡事件
                            event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
                        },
                        false
                    );
                }
            },
            //鼠标释放时候的函数
            end() {
                this.flags = false;
            },
            liuyan() {
                this.$router.push({
                    path: "/drag",
                });
            },
        },
    };
</script>
<style scoped>
    /*css样式可自定义 仅提供参考*/
    #webId {
        position: relative;
    }
    .xuanfu {
        height: 4rem; /* rem = 12px */
        width: 4rem;
        /*1.3  如果碰到滑动问题，请检查 z-index。z-index需比web大一级*/
        z-index: 99999999999;
        position: fixed;

        right: 1rem;
        bottom: 4rem;
        border-radius: 50%;
        background-color: rgb(16, 162, 255);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 90%;
        height: 90%;
        border-radius: 50%;
    }
</style>