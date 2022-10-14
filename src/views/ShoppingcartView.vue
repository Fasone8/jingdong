<template>
   <SouSuoTwo>
       <template v-slot:left>
           <div class="left"></div>
       </template>
       <template v-slot:center>
               购物车
       </template>
       <template v-slot:right>
        <div class="right"></div>

       </template>
   </SouSuoTwo>

<!--    <GouWuCheCp></GouWuCheCp>-->
   <div class="region1">
       <div class="region">
        {{this.admin.address}}
       </div>
      <span>编辑商品</span>
   </div>
     <GouWUChe :title="admin"></GouWUChe>

    <div class="app">
        <img src="https://img12.360buyimg.com/img/s694x148_jfs/t1/171999/12/22113/58222/61bad82eE0dcf6d31/d92d1e829bf953da.png" alt="">
    </div>
    <div class="title">
        <div class="title1"></div>
        <div class="title2">可能还感兴趣</div>
        <div class="title3"></div>
    </div>
    <GoodsListWz/>
    <TabBarWz/>
</template>

<script>
    import SouSuoTwo from "../components/header/SouSuoTwo.vue";
    import GouWuCheCp from "../components/header/GouWuCheCp.vue";
    import GoodsListWz from "../components/goods/GoodsListWz.vue";
    import GouWUChe from "../components/goods/GouWUChe.vue";
    import TabBarWz from "../components/tab/TabBarWz.vue";
    import {computed} from 'vue'

    export default {
        name: "ShoppingcartView",
        components:{
            SouSuoTwo,
            GouWuCheCp,
            GoodsListWz,
            GouWUChe,
            TabBarWz,
            computed
        },
        data(){
            return{
                admin:computed(()=>this.$store.state. administrators[0])
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
  .right{
      margin-top: -5px;
       background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMBAMAAAAzCuYOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUxpcV1ga11fa11gamZmcF1fankXv8cAAAAFdFJOUwDD82UZbfC98gAAAEtJREFUGNNjYGAWUjRgQACsXBbR0NBAB7ggdi5jKBAIwEWxc01BVDBcFDtXFEQFwkWxc1VBVBBcFDuXKEVEWUeUw4kKAqICk5hoAQAuJDMBhQy+8AAAAABJRU5ErkJggg==) no-repeat 50%;
      background-size: 20px;

      height: 44px;
      width: 44px;;
  }
  .region1{
      width: 100%;
      height: 71px;
      background: white;
      margin-top: 5px;
      display: flex;
  }
    .region{
        flex: 1;
        width: 429px;
        height: 71px;

    }
    .region1>span{
         width: 74px;
        height: 71px;
        color: #262626;
        font-size:2.5vw;
        margin-top: 22px;
        margin-left: 5px;
    }

    .app{
        width: 100%;
        height: 23vw;
    }
    img{
        width: 96%;
        height: 23vw;
    }
    .title{
        display: flex;
        width: 96%;
        height: 40px;

        margin: 0 auto;
        margin-top: 5px;
    }
    .title1{
        width: 35%;
        height: 1px;
        background: lightgrey;
        margin-top: 10px;
    }
    .title2{
        flex: 1;
        width:26% ;
        height: 44px;
        line-height: 22px;
        color: lightgrey;
        text-align: center;
    }
    .title3{
        width: 35%;
        height: 1px;
        background: lightgrey;
        margin-top: 10px;
    }
</style>