<template>
    <li>
        <router-link :to="{path:'/goods-view',query:{id:goodslist.id}}">
            <div class="goodsListImg"><img
                    :src="goodslist.logo"
                    alt=""></div>
            <div class="goodsListWord">
                <div class="goodsListName">{{goodslist.name}}
                </div>
                <div class="goodsListPrice"><span>￥</span><span>{{goodslist.price}}</span><span>.{{goodslist.rate}}</span></div>
                <div class="goodsListSale">{{goodslist.promotions}}</div>
                <div>
                    <div class="goodsListSupport" v-if="goodslist.jingDongZiYing">自营</div>
                    <div class="goodsListBottom" v-else><img
                            :src="goodslist.jingDongWuLiu"
                            alt=""></div>
                    <div class="goodsListAssess">{{goodslist.assess}}</div>
                    <div class="goodsListLast">看相似</div>
                </div>

            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "GoodsListItemWz",
        props:["goodslist"]
    }
</script>

<style scoped>
    li{width: 50%;height: 19rem;float: left;padding: .25rem;list-style: none;box-sizing: border-box; }
    li>a{text-decoration:none;display: block;width: 100%;height: 100%;background: #ffffff;border-radius: .6rem;overflow: hidden;}
    .goodsListImg{width: 11.6rem;height: 12.5rem;margin-bottom: 0.25rem;position: relative;-webkit-box-sizing: border-box;box-sizing: border-box;}
    .goodsListName{text-align: center;line-height: 1.05rem;height: 2.1rem;font-size: 0.7rem;font-family: -apple-system, Helvetica, sans-serif;overflow: hidden;color: #434343;margin:.5rem 0 .1rem 0;-o-text-overflow: ellipsis;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;word-break: break-all;-webkit-box-orient: vertical;}
    .goodsListPrice{margin-right:5px;font-style: normal;font-family: JDZH-Regular, sans-serif;display: inline-block;font-size: 0.7rem;line-height: 1.5rem;color: #ff4142;}
    .goodsListPrice>span:nth-child(2){font-size: 1rem;color: #ff4142;}
    .goodsListBottom{display: inline-block;}
    .goodsListBottom>img{width: 3rem;height: 1rem; }
    .goodsListWord{position: relative}
    .goodsListLast{display:inline-block;position:absolute;right:2px;text-align: center;background: #f2f2f2;color: #262626;font-size: 0.55rem;width: 2.5rem;height: 1rem;border-radius: 0.5rem;}
    li>a>div>img{width: 100%;height: 100%}
    .goodsListSale{border:1px solid red;display: inline-block;font-size: 12px;color: red;border-radius: 0.2rem;padding: 1px 1px 1px 1px}
    .goodsListSupport{display:inline-block;background: red;color: white;width:1.5rem;height: 1rem;font-size: 12px;padding: 1px 1px 1px 1px;border-radius: 0.2rem }
    .goodsListAssess{width: 5rem;height: 2rem;color:black;display: inline-block;font-size: 12px;margin-top:7px;line-height: 10px;}
    .goodsListAssess::before{display: inline-block;content: "";width: 5px}
</style>