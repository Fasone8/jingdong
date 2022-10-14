<template>
    <div>
        <span class="aaa">京东秒杀</span>
        &nbsp;
        <span class="bbb">爆款轮番秒杀</span>
        <p>{{dianChang}}点场</p>
        &nbsp;
        <p class="zzz">{{h}}</p>:<p class="zzz">{{m}}</p>:<p class="zzz">{{s}}</p>
    </div>
    <nav>
        <div>

        <ul>
            <li v-for="item of navlist" :key="item.id">
                <router-link to="/miaosha-view">
                <img :src="item.url" alt="">
                    <span class="ddd">￥{{item.price}}</span>
                </router-link>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {computed} from "vue";

    export default {
        name: "NavWzkCom",
        data() {
            return {


                navlist:computed(()=>this.$store.state.navlist),



                now: new Date(),
                remain: 0,
                h: '',
                m: '',
                s: ''

            }
        },
        computed: {
            dianChang() {
                const h = this.now.getHours()
                return h % 2 === 0 ? h : h - 1
            },

        },
        created() {




            // console.log(this.dianChang)
            const a = this.dianChang + 1
            // console.log(a)

            //获取结束前一小时

            const d = new Date();
            d.getHours()
            d.getMinutes()
            d.getSeconds()
            //获取当前小时，分钟，秒数

            let h = a - d.getHours()

            this.h = a - d.getHours()
            // 倒计时小时


            let m = 59 - d.getMinutes()


            this.m = 59 - d.getMinutes()
            // 倒计时分钟


            let s = 60 - d.getSeconds()


            this.s = 60 - d.getSeconds()
            // 倒计时秒数


            setInterval(() => {



                const a = this.dianChang + 1
                // console.log(a)

                //获取结束前一小时

                const d = new Date();
                d.getHours()
                d.getMinutes()
                d.getSeconds()
                //获取当前小时，分钟，秒数

                let h = a - d.getHours()

                this.h = a - d.getHours()
                // 倒计时小时

                let m = 59 - d.getMinutes()

                this.m =59 - d.getMinutes()
                // 倒计时分钟

                let s = 60 - d.getSeconds()

                this.s = 60 - d.getSeconds()
                // 倒计时秒数
            }, 1000)

        }
    }
</script>

<style scoped>
    nav {
        width: 94%;
        height: 201px;
        overflow-x: scroll;
        scrollbar-width: none;

    }

    nav::-webkit-scrollbar {
        display: none
    }

    ul {
        width: 1600px;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }

    li {
        width: 150px;
        height: 160px;
    }

    li > img {
        width: 150px;
        height: 150px;
    }

    .ddd {
        color: red;
        width: 50px;
        margin-left: 50px;
    }

    .aaa {
        margin-left: 5px;
        font-size: 18px;
    }

    .bbb {
        float: right;
        position: relative;
        right: 30px;
        font-size: 12px;
        color: red;
    }

    p {
        display: inline-block;
    }

    .zzz {
        background: red;
        border-radius: 5px;
    }

</style>