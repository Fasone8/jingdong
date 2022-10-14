<template>
    <SouSuoTwo>
        <template v-slot:left>
            <div class="left"></div>
        </template>
        <template v-slot:center>
            <input type="text" placeholder="美的高压锅" v-model="user">
        </template>
        <template v-slot:right >
            <button @click="user1">
                搜索
            </button>
        </template>
    </SouSuoTwo>
    <div class="maximal">
        <div class="search">
            <p>最近搜索</p>
            <div class="delete"></div>
            <div class="shopping1" v-for="item of zuijin" :key="item.id">
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="hot-search">
            <p>热门搜索</p>
            <span>隐藏</span>
            <div class="shopping" v-for="item of hotsearth" :key="item.id" @click="hot(item)">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import SouSuoTwo from "../../components/header/SouSuoTwo.vue";
    import {computed} from 'vue'
    export default {
        name: "SouSuoView",

        components:{
            SouSuoTwo
        },
        data(){
            return{
                zuijin:[],
                hotsearth:[
                    {id:0,name:'毛巾'},
                    {id:1,name:'哑铃'},
                    {id:2,name:'晾衣架'},
                    {id:3,name:'开关插座'},
                    {id:4,name:'跑步机'},
                    {id:5,name:'游戏本'},
                    {id:6,name:'儿童遥控飞机'},
                    {id:7,name:'斯洛克球杆'},
                    {id:8,name:'照片扫描仪'},
                    {id:9,name:'脸部卸妆油'},
                ]


            }
        },
        mounted() {


        },


        created() {

            this.zuijin=this.$store.state.zuijin


        },
        methods:{
            hot(item){
                // this.zuijin.push(item)
                this.$store.dispatch('hot',item)

            }
        }
    }
</script>

<style scoped>
    .left{
        width: 20px;
        height: 20px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTF1famFhal1fal1fal5ga39/f15hbF5ga2JidV1fasLnCw4AAAAKdFJOUwDxN13aWgVemg1awhgkAAAATUlEQVQoz2NgGAjA5FiAKai4SgxToRQWQcVVqwKwKFyMTaHBUFTI4IVFIeeqVQ0MRKnEGkAg25cyEGc9VocOCqUBxKUQrGkJe6qjEgAAfcYsJDT7oy4AAAAASUVORK5CYII=");
        background-size: 20px 20px;
        margin-top: 6px;
        margin-left: 9px;
    }
    input{
        width: 98%;
        height: 20px;
        border-radius: 15px;
        border: none;
        margin-left: -5px;

        font-size: 12px;

        background: #f7f7f7;
    }
    input:focus {
        border: none;
        outline: none;
    }

    button{
        width: 36px;
        height: 28px;
        color: white;
        background: #e43130;
        font-size: 12px;
        border: none;
        margin-top: 1px;
        margin-left: 3px;

    }
    .maximal{

        width: 100%;
        background: white;
        margin-top: -11px;
    }
    .search{
        width: 96%;
        margin: 0 auto;
    }
    .delete{
        float: right;
        display: block;
        background: url(//st.360buyimg.com/so/images/layout/search-sprites.png) no-repeat;
        height: 15px;
        width: 15px;
        background-position: 0 -35px;
        background-size: 50px 50px;
        position: relative;
        top: -32px;
    }
    .hot-search{
        width: 96%;
        margin: 0 auto;
    }
    .hot-search>span{
        float: right;
        font-size: 12px;
        color: lightgrey;
        margin-top: -29px;
    }
    .shopping{
        margin-left: 10px;
        margin-top: 5px;
        display: inline-block;
        height: 25px;
        background: #f0f2f5;
        font-size: 12px;
        color: #686868;
        width: 86px;

    }
    .shopping1{
        margin-left: 10px;
        margin-top: 5px;
        display: inline-block;
        height: 25px;
        background: #f0f2f5;
        font-size: 12px;
        color: #686868;
        width: 86px;

    }
    .shopping1>span{

        margin-top: 5px;
        margin-left:5px ;
        line-height: 22.5px;
    }
    .shopping>span{

        margin-top: 5px;
        margin-left:5px ;
        line-height: 22.5px;
    }
</style>