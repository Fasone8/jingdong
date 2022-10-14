<template>
    <div class="box">
        <ul>
            <li v-for="(item,index) in goodslist" :key="item.name">
                <div class="radio">
                    <input
                            type="checkbox"
                            :checked="item.checked"
                            @click="changechecked($event,item.name)"
                    />
                    <img :src="item.logo" alt=""/>
                </div>
                <div class="title">
                    <span>{{item.name}}</span>
                    <p class="price">￥{{item.price}}</p>
                </div>
                <div class="num-count">
                    <button ref="sub" @click="subcount(item.name)">-</button>
                    <input type="text" :value="item.count"/>
                    <button ref="add" @click="addcount(item.name)">+</button>
                </div>
                <br>
                <button @click="shanchu(item)">删除</button>
            </li>
        </ul>
        <div class="main">
            <input type="checkbox" v-model="ischecked" @click="allchecked"/>
            <div class="sum">￥{{sum}}.00</div>
            <div class="settlement">
                <span @click="settlement">结算({{count}})</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {computed} from 'vue'

    export default {
        name: "GouWUChe",
        components: {
            computed
        },
        data() {
            return {
                sum: 0,
                ischecked: false,
                count: 0,
                /*   goodslist: [
                       {
                           name: "Redmi Book Pro 15 2022全新12代英特尔处理器 ",
                           price: 5599,
                           // img: "./购物车图片/1.jpg",
                           checked: false,
                           count: 1,
                       },
                       {
                           name: "Redmi G 2021锐龙版 3050Ti版本",
                           price: 5788,
                           // img: "./购物车图片/2.jpg",
                           checked: false,
                           count: 1,
                       },
                       {
                           name: "Pro 14 增强版 i5 独显 - Win11",
                           price: 4799,
                           // img: "./购物车图片/3.jpg",
                           checked: false,
                           count: 1,
                       },
                       {
                           name: "RedmiBook Pro 15 R5/16G/512G 灰",
                           price: 4699,
                           // img: "./购物车图片/4.jpg",
                           checked: false,
                           count: 1,
                       },
                   ],*/
                goodslist: computed(() => this.$store.state.administrators[0].goods),

            }
        },
        methods: {
            //单选按钮
            changechecked(e, name) {
                let result = this.goodslist.map((item) => {
                    if (name == item.name) {
                        item.checked = e.target.checked;
                    }
                    return item.checked;
                });
                let res = result.every((item) => {
                    return item;
                });
                if (res) {
                    this.ischecked = true;
                } else {
                    this.ischecked = false;
                }
                this.getnewsum();
                this.getnumcount();
            },
            //自减模块
            subcount(name) {
                //count自减
                this.goodslist.filter((item) => {
                    if (item.name == name) {
                        if (item.count <= 0) return (item.count = 0);
                        item.count--;
                    }
                });
                this.getnewsum();
                this.getnumcount();
            },
            //自增模块
            addcount(name) {
                //count自增
                this.goodslist.filter((item) => {
                    if (item.name == name) {
                        item.count++;
                    }
                });
                this.getnewsum();
                this.getnumcount();
            },
            //全选按钮
            allchecked(e) {
                if (e.target.checked) {
                    this.goodslist.forEach((item) => {
                        item.checked = true;
                    });
                } else {
                    this.goodslist.forEach((item) => {
                        item.checked = false;
                    });
                }
                this.getnewsum();
                this.getnumcount();
            },
            //弹出框
            settlement() {
                alert("你本次消费" + this.sum + ".00");
            },
            //计算总价
            getnewsum() {
                let num = 0;
                this.goodslist.find((item) => {
                    if (item.checked) {
                        num += item.price * item.count;
                    }
                });
                this.sum = num;
            },
            //计算总数
            getnumcount() {
                let count = 0;
                this.goodslist.find((item) => {
                    if (item.checked) {
                        count += item.count;
                    }
                });
                this.count = count;
            },
            shanchu(item) {

                if (confirm('你是否删除')) {
                    this.goodslist.splice(item, 1)
                } else {
                    this.goodslist
                }

            }

        },

    }
</script>

<style scoped>
    .box {
        width: 100%;


        margin: 0 auto;
    }

    li {
        list-style: none;
    }

    .box ul li {
        height: 100px;
        width: 100%;
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .box ul li .radio {
        display: flex;
        align-items: center;
    }

    .box ul li .radio img {
        width: 80px;
        height: 80px;
    }

    .box ul li .title {
        width: 500px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
    }

    .box ul li .title span {
        font-size: 14px;
        font-weight: bold;
        padding: 10px 0px;
    }

    .box ul li .title .price {
        font-size: 20px;
        padding: 10px 0px;
    }

    .box .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        bottom: 30px;

        margin-top: 70px;
    }

    .box .main .sum {
        font-size: 20px;
        font-weight: bold;
    }

    .box .main .settlement {
        width: 100px;
        height: 50px;

    }

    .box .main .settlement span {
        line-height: 50px;
        padding-left: 20%;
        font-size: 18px;
        cursor: pointer;
    }

    .box ul li .num-count {
        width: 130px;
        height: 30px;

        display: flex;
        justify-content: center;
    }

    .box ul li .num-count input {
        width: 20px;
        outline: none;
        text-align: center;
    }

    .box ul li .num-count button {
        width: 15px;

    }

    .box ul li > button {
        width: 30px;
        height: 30px;
        border: none;
        font-size: 12px;
        color: lightgrey;
    }
</style>