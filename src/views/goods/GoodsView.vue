<template>
    <div class="header" @click="backto">
        <svg t="1665554052766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2954" width="30" height="30">
            <path d="M512.105912 80.83812c-237.365082 0-429.779394 192.56883-429.779394 430.134481 0 237.564627 192.414311 430.132434 429.779394 430.132434 237.387595 0 429.801906-192.567807 429.801906-430.132434C941.907818 273.40695 749.494531 80.83812 512.105912 80.83812zM605.570607 696.710862c10.212596 10.166547 11.227716 25.591865 2.321882 34.477232-8.92937 8.885368-24.465205 7.844665-34.675754-2.297322l-199.88547-197.651592c-5.79089-5.7694-8.53028-13.19451-8.266267-20.180622-0.309038-7.048533 2.432399-14.541181 8.245801-20.35356l199.905936-197.651592c10.210549-10.166547 25.724895-11.183713 34.675754-2.298346 8.905834 8.884344 7.891737 24.311709-2.321882 34.477232L417.64554 510.972601 605.570607 696.710862z"
                  p-id="2955"></path>
        </svg>
    </div>
    <img :src="goodslist.logo" alt="">
    <div class="goods">
        <div class="goodprice">{{`￥${goodslist.price}`}}</div>
        <div class="goodname">{{goodslist.name}}</div>
        <div class="comments"></div>

    </div>
    <div class="buygood" v-show="ifshop">
        <div class="shop">店铺</div>
        <div class="customer">客服</div>
        <router-link to="/shoppingcart-view">
            <div class="shopcart">购物车</div>
        </router-link>
        <div class="row">
            <input type="button" value="加入购物车" @click="shopcart">
            <input type="button" value="立即购买" @click="shoping">
        </div>
    </div>

    <div class="overview" v-show="ifshow">
        <div class="goodtype">
            <img :src="goodslist.logo" alt="">
            <div class="goodprice">{{`￥${goodslist.price}`}}</div>
            <svg @click="closeshop" t="1665563191207" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="2558" width="30" height="30">
                <path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-572.330667L300.629333 240.213333a42.538667 42.538667 0 0 0-60.16 0.213334 42.410667 42.410667 0 0 0-0.213333 60.16L451.669333 512 240.213333 723.370667a42.538667 42.538667 0 0 0 0.213334 60.16 42.410667 42.410667 0 0 0 60.16 0.213333L512 572.330667l211.370667 211.413333a42.538667 42.538667 0 0 0 60.16-0.213333 42.410667 42.410667 0 0 0 0.213333-60.16L572.330667 512l211.413333-211.370667a42.538667 42.538667 0 0 0-0.213333-60.16 42.410667 42.410667 0 0 0-60.16-0.213333L512 451.669333z"
                      fill="#3D3D3D" p-id="2559"></path>
            </svg>
        </div>
        <div class="goodcolor">
            <span v-show="goodslist.type">颜色</span>
            <ul>
                <li v-for="(item,index) of goodslist.type" :key="item.index" @click="getcolor(index)"
                    :class="{active:colorisActive === index}">
                    <button>{{item}}</button>
                </li>
            </ul>
        </div>
        <div class="goodsize">
            <span v-show="goodslist.size">尺码</span>
            <ul>
                <li v-for="(item,index) of goodslist.size" :key="item.index" @click="getsize(index)"
                    :class="{active:sizeisActive === index}">
                    <button>{{item}}</button>
                </li>
            </ul>
        </div>
        <div class="goodnumber">
            <span>数量</span>
            <div class="number">
                <input type="button" @click="decrease" value="-" :disabled="goodsnumber===1?true:false">
                <input type="number" v-model.lazy="goodsnumber" class="detailnumber"/>
                <input type="button" @click="increase" value="+">
            </div>
        </div>
        <div class="truebuy">
            <input type="button" value="确定" v-show="ifshopcart" @click="shopcarting">
        </div>
        <div class="truebuy" v-show="ifshoping" @click="shoped">
            <input type="button" value="确定">
        </div>
    </div>
</template>

<script>
    import {computed} from "vue";

    export default {
        name: "GoodsView",
        data() {
            return {
                goodslists: computed(() => this.$store.state.goodslist),
                goodslist: {},
                goodsnumber: 1,
                ifshow: false,
                ifshop: true,
                ifshopcart: true,
                ifshoping: true,
                colorisActive: 0,
                sizeisActive: 0,
                shopthing: []
            }
        },
        mounted() {
            let id = this.$route.query.id
            this.goodslist = this.goodslists[id]
            // console.log(this.goodslist)
        },
        methods: {
            backto() {
                this.$router.go(-1)
            },
            decrease() {
                if (this.goodsnumber === 1) return
                this.goodsnumber--
            },
            increase() {
                this.goodsnumber++
            },
            shopcart() {
                this.ifshow = true
                this.ifshop = false
                this.ifshopcart = true
                this.ifshoping = false
            },
            shoping() {
                this.ifshow = true
                this.ifshop = false
                this.ifshopcart = false
                this.ifshoping = true
            },
            closeshop() {
                this.ifshow = false
                this.ifshop = true
                this.ifshopcart = false
            },
            getcolor(index) {
                this.colorisActive = index

            },
            getsize(index) {
                this.sizeisActive = index
                // console.log()
            },
            shopcarting() {
                this.ifshow = false
                this.ifshop = true
                this.ifshopcart = false
                alert('加入购物车成功！')
            },
            shoped() {
                this.$router.push({
                    path: '/pay-view',
                    query: {
                        goodlogo: this.goodslist.logo,
                        goodname: this.goodslist.name,
                        goodsize: this.goodslist.size[this.sizeisActive],
                        goodtype: this.goodslist.type[this.colorisActive],
                        goodprice: this.goodslist.price,
                        goodnumber: this.goodsnumber
                    }
                })
            }

        },
        watch: {
            goodsnumber(newVal, oldVal) {
                if (newVal < 1 || !newVal) return this.goodsnumber = 1
            }
        }
    }
</script>

<style scoped>
    .active > button {
        color: red;
        /*background: red;*/
        background: #FCECED;
    }

    .header {
        /*display: inline-block;*/
        position: absolute;
        left: 5px;
        top: 5px;
    }

    .header > svg.icon {
        width: 40px;
        height: 40px;
    }

    img {
        width: 100%;
        height: 390px;
        /*display: inline-block;*/
    }

    .goods {
        padding-left: 10px;
    }

    .goodprice {
        width: 100%;
        font-size: 24px;
        color: #f2270c
    }

    .goodname {
        color: #262626;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
    }

    .comments {
        width: 100%;
        height: 300px;
    }

    .buygood {
        /*background: #434343;*/
        background: #ffffff;
        width: 100%;
        height: 44px;
        line-height: 44px;
        position: fixed;
        buttom: 0;
        z-index: 1000;
        display: flex;
        justify-content: space-around;
    }

    .row > input {
        color: #ffffff;
        width: 100px;
        height: 40px;
        font-family: JDZH-Bold;
        font-size: 13px;
        font-weight: 700;
        border: none;
        border-radius: 20px;
        padding: 0 10px;
    }

    .row > input:nth-child(1) {
        background: #f2270c;
        margin-right: 5px;

    }

    .row > input:nth-child(2) {
        background: #ffba0d;
    }


    .overview {
        width: 100%;
        height: 60%;
        /*overflow-x: hidden;*/
        position: absolute;
        bottom: 0;
        background: #ffffff;
        /*display: none;*/
    }

    .goodtype {
        padding: 20px;
        display: flex;
        justify-content: space-around;
    }


    .overview img {
        width: 100px;
        height: 100px;
    }

    .goodcolor > span {
        margin-left: 20px;
    }

    .goodcolor > ul {
        display: flex;
        justify-content: space-around;
    }

    .goodcolor button {
        width: 74px;
        height: 30px;
        border: none;
        outline: red;
        border-radius: 15px;
    }

    .goodsize > span {
        margin-left: 20px;
    }

    .goodsize > ul {
        display: flex;
        justify-content: space-around;
    }

    .goodsize button {
        width: 74px;
        height: 30px;
        border: none;
        outline: red;
        border-radius: 15px;
    }

    .goodnumber {
        display: flex;
        justify-content: space-between;
    }

    .goodnumber > span {
        margin-left: 20px;
    }

    .detailnumber {
        width: 30px;
        outline: none;
    }

    .truebuy > input {
        color: #ffffff;
        background: #f2270c;
        width: 100%;
        height: 40px;
        font-family: JDZH-Bold;
        font-size: 13px;
        font-weight: 700;
        border: none;
        border-radius: 20px;
        padding: 0 10px;
        position: fixed;
        bottom: 0;
    }
</style>