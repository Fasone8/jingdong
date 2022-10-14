<template>
    <div class="leftNav">
        <ul>
            <li v-for="(item,index) of classifylist" :key="index">
                <router-link :to="{path:'/classify-view',query:{id:item.id}}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ClassifyCom",
        data() {
            return {
                classifylist: [
                    {id: 0, name: '热门推荐'},
                    {id: 1, name: '手机数码'},
                    {id: 2, name: '京东超市'},
                    {id: 3, name: '家用电器'},
                    {id: 4, name: '电脑办公'},
                    {id: 5, name: '玩具乐器'},
                ]
            }
        }, mounted() {
            // this.$router.push({path: '/classify-view', query: {id: 0}})
        }
    }
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        width: 85px
    }

    li {
        text-align: center;
        line-height: 44px;
        height: 44px;
        /*background: white;*/
        /*border: 1px solid #434343;*/
    }

    li > a {
        color: #8b8b8b;
    }

    li:hover {
        background-color: white;
    }

    a.router-link-active {
        color: #d81e06;
    }

    .leftNav {
        float: left;
        margin: 0;
        padding: 0;
        width: 85px;
        /*height:743px;*/
        height: 800px;
        background-color: #f8f8f8;
        display: inline-block;
    }
</style>