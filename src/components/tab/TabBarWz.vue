<template>
    <ul>
        <li>
            <router-link to="/">
                <svg class="icon" v-if="$route.path!=='/'">
                    <use xlink:href="#icon-jingdong"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-jingdong-copy"></use>
                </svg>
                首页
            </router-link>

        </li>
        <li>
            <router-link :to="{path:'/classify-view',query:{id:0}}">
                <svg class="icon" v-if="$route.path!=='/classify-view'">
                    <use xlink:href="#icon-fenlei"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-fenlei-copy"></use>
                </svg>
                分类
            </router-link>

        </li>
        <li>
            <router-link to="/price-view">
                <svg class="icon" v-if="$route.path!=='/price-view'">
                    <use xlink:href="#icon-tubiao04"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-tubiao04-copy"></use>
                </svg>
                京喜
            </router-link>

        </li>
        <li>
            <router-link to="/shoppingcart-view">
                <svg class="icon" v-if="$route.path!=='/shoppingcart-view'">
                    <use xlink:href="#icon-gouwuche"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-gouwuche-copy"></use>
                </svg>
                购物车
            </router-link>

        </li>
        <li>
            <router-link to="/profile-view">
                <svg class="icon" v-if="$route.path!=='profile-view'">
                    <use xlink:href="#icon-gerenzhanghu"></use>
                </svg>
                <svg class="icon" v-else>
                    <use xlink:href="#icon-gerenzhanghu-copy"></use>
                </svg>
                未登录
            </router-link>

        </li>
    </ul>
</template>

<script>
    export default {
        name: "TabBarWz"
    }
</script>

<style scoped>
    ul{
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        padding-top: 3px;
        justify-content: space-around;
        box-shadow:0 0 10px #000;
        z-index: 1000;
    }
    li{
        width: 50px;
        height: 100%;
        text-align: center;

    }
    li svg{
        width: 35px;
        height: 30px;
        margin-bottom: -5px;
    }
    li>a{
        color: #8b8b8b;
    }
    a.router-link-active{
        color: #d81e06;
    }
</style>