<template>
    <div class="header">
        <span @click="back" class="backto">
            <router-link to="/">
            <svg class="icon" v-if="$route.path!=='/'">
                    <use xlink:href="#icon-jiantou_liebiaoxiangzuo"></use>
                </svg>
        </router-link>
        </span>
        <div class="confirm ">
            <strong>确认订单</strong>
        </div>
    </div>
    <div class="addresses">
        <span>山东济南市章丘区双山街道</span>
        <div class="addresses-content">
            <strong>经十路6196号山东工程职业技术大学</strong>
            <span @click="back" class="backtwo">
            <router-link to="/">
            <svg class="icon" v-if="$route.path!=='/'">
                    <use xlink:href="#icon-jiantou_liebiaoxiangzuo-copy"></use>
                </svg>
        </router-link>
        </span>
        </div>
        <span>王缜 159****5628</span>
    </div>
    <div class="goodsContent">
        <div class="goodsContent-top">
            <img src="https://storage.360buyimg.com/static-common/checkout/jd.svg" alt="">
            <p>京东自营</p>
        </div>
        <div class="gooddetail">
            <img :src="good.goodlogo" alt="">
            <div class="goodname">{{good.goodname}}</div>
            <div class="goodtype">{{good.goodtype}}|{{good.goodsize}}</div>
            <div class="numberprice">
                <div class="goodprice">￥{{good.goodprice}}</div>
                <div class="goodnumber">{{good.goodnumber}}</div>
            </div>
        </div>
    </div>
    <div class="goodsTransport">
        <ul class="transdetail">
            <li>商品金额</li>
            <li>运费</li>
        </ul>
        <ul class="transprice">
            <li>￥{{good.goodprice*good.goodnumber}}</li>
            <li>￥0.00</li>
        </ul>
    </div>
    <div class="pay">
        <div class="payprice">￥{{good.goodprice*good.goodnumber}}</div>
       <button>在线支付</button>
    </div>
</template>

<script>
    import {computed} from 'vue'

    export default {
        name: "ApplyPage",
        data() {
            return {
                good: computed(() => this.$route.query)
            }
        },
        mounted() {
            console.log(this.good)
        },
        methods: {
            back() {
                this.$router.push('/')
            }
        }
    }

</script>

<style scoped>
    div {
        margin: 0;
        padding: 0;
    }

    .header {
        width: 100%;
        height: 44px;
        background-color: #ffffff;
        /*box-shadow:0 0 10px #8b8b8b;*/
        border-bottom: 2px #f8f8f8 solid;
        display: flex;
    }

    .backto {
        flex: 0;
    }

    .backto svg {
        width: 40px;
        height: 100%;
    }

    .confirm {
        flex: 1;
        margin-left: 125px;
        line-height: 40px;
        display: inline-block;
    }

    .addresses-content {
        font-size: 18px;
        color: #1A1A1A;
    }

    .addresses {
        width: 100%;
        background-color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 2px #ff7967 solid;
    }

    .addresses > span {
        margin-left: 10px;
        font-size: 14px;
    }

    .addresses > div {
        margin-left: 10px;
    }

    .addresses-content {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .backtwo {
        display: inline-block;
        float: right;

    }

    .backtwo svg {
        width: 30px;
        height: 30px;

    }

    .goodsContent {
        width: 95%;
        /*height: 350px;*/
        margin-top: 10px;
        border-radius: 15px;
        background-color: white;
        padding: 10px;
    }
    .goodsTransport{
        display: flex;
        justify-content: space-between;
        width: 95%;
        /*height: 350px;*/
        margin-top: 10px;
        border-radius: 15px;
        background-color: white;
        padding: 10px;
    }
    .transprice{
            font-weight: bold;
        /*padding: 12px 0;*/
    }
    .goodsTransport>ul>li{
        padding: 12px 0;
        font-size: 15px;
        color: #1A1A1A;
    }



    .goodsContent-top {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50px;
        /*background-color: red;*/
    }

    .goodsContent-top > img {
        width: 15px;
        height: 15px;
        margin-top: 15px;
        margin-left: 10px;
    }

    .goodsContent-top > p {
        line-height: 10px;
        font-size: 16px;
        margin-left: 10px;
        display: inline-block;
    }

    .gooddetail>img{
        width: 100px;
        height: 100px;
    }
    .goodname {
        font-size: 15px;
        color: #1A1A1A;
        /*float: left;*/
    }
    .goodtype{
        font-size: 12px;
        color: #808080;
    }
    .numberprice{
        display: flex;
        justify-content: space-between;
    }
    .goodprice{
        font-size: 18px;
        font-weight: bold;
        color: #46D941;
        /*display: inline;*/
    }
    .goodnumber{
        font-size: 12px;
        color: #808080;
    }
    .pay{
        position: fixed;
        bottom: 0;
        background: white;
        width: 95%;
        height: 50px;
        line-height: 50px;
        border-radius: 10px 10px 0 0;
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
    }
    .pay>.payprice{
        font-size: 25px;
        color: #FA2C19;
    }
    .pay>button{
        width: 120px;
        height: 40px;
        background: #FA2C19;
        color: #ffffff;
        border: none;
        border-radius: 20px;
        font-weight: bold;
    }
</style>