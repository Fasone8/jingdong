<template>
    <ul class="dibu">
        <li>京东秒杀</li>
        <li>超值9.9</li>
        <li>品类秒杀</li>
        <li>秒杀分类</li>
    </ul>
    <div class="toubu">
        <router-link to="/">
            <span> 返回 </span>
        </router-link>
        京东秒杀
    </div>
    <div class="changtu">
        <ul v-for="item of miaoshaone" :key="item.id">
            <li>
                <div class="ccc">
                    <img :src="item.url" alt="">
                    <div class="one">{{item.name}}</div>
                    <div class="one two">{{item.text}}</div>
                </div>

            </li>
        </ul>
    </div>


    <div class="liebiao">
        <div class="daohang">正在疯抢</div>
        <div class="daohang">抢先看</div>
        <ul>
            <li v-for="item of miaoshatwo" :key="item.id">
                <img :src="item.url" alt="">

                <div class="aaa">
                    {{item.text}}
                    <br><br><br>
                    <span> ￥{{item.price}}</span>
                    <div class="qiang">
                        <img src="https://m.360buyimg.com/babel/jfs/t1/76107/34/21242/2273/63032872E35a02d87/a329650fb0cacec5.png" alt="">
                    </div>
                </div>

                <div class="fenjiexian"></div>
            </li>
        </ul>
        <div class="ding"></div>
    </div>
</template>

<script>
    import {computed} from "vue"

    export default {
        name: "MiaoShaView",
        data() {
            return {
                miaoshaone: computed(() => this.$store.state.miaoshaone),
                miaoshatwo: computed(() => this.$store.state.miaoshatwo),
            }

        }
    }
</script>

<style scoped>
    .dibu {
        width: 100%;
        height: 3vh;
        line-height: 3vh;
        background: red;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
    }

    .toubu {
        width: 100%;
        height: 5vh;
        line-height: 5vh;
        background: white;
        text-align: center;
    }

    .changtu {
        display: flex;
        overflow-x: scroll;
        scrollbar-width: none;
    }

    .changtu::-webkit-scrollbar {
        display: none
    }

    .changtu > ul {
        background: #ff4142;
        width: 100%;

    }

    .changtu > ul > li {
        width: 27vw;
        height: 12.5vh;
    }

    .changtu > ul > li > div {
        width: 80%;
        height: 90%;
        background: white;
        margin-top: 5%;
        margin-left: 10%;
        border-radius: 20px;
    }

    .changtu img {
        height: 50%;
        width: 50%;
        margin: 5% 25%;
    }

    .one {
        font-size: 1vw;
        padding: 0;
        text-align: center;
    }

    .liebiao {
        width: 100%;
        background: whitesmoke;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .daohang {
        width: 50%;
        display: inline-block;
        text-align: center;
        height: 6vh;
        background: lightgray;
        line-height: 6vh;
    }

    li {
        list-style: none;
    }

    .liebiao img {
        width: 32vw;
        height: 15vh;
        margin-left: 5%;
        margin-top: 2%;
        border-radius: 20px;
    }

    .liebiao span {
        margin: 0;
    }

    .aaa {
        display: inline-block;
        width: 50%;
        margin-top: 5%;
        margin-left: 5%;
        vertical-align: top;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .aaa span {
        color: red;
        font-size: 6vw;
    }

    .fenjiexian {
        height: 1px;
        width: 50%;
        background: lightgray;
        margin-left: 40%;
    }

    .ding {
        width: 100%;
        height: 6vh;
    }
    .qiang{
        width: 20vw;
        height: 5vh;
        display: inline-block;
        float: right;
        position: relative;
        bottom: 1vh;
    }
    .qiang>img{
        width: 100%;
        height: 100%;
    }
    .toubu span{
        float: left;
    }
</style>