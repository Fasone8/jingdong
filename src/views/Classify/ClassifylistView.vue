<template>

    <div class="rightNav">
        <div><strong>热门分类</strong></div>
        <ul v-for="(item,index) of classlist[this.$route.query.id]" :key="index" class="content">
            <li>
                <img :src="item.url" alt="">
                <div>{{item.name}}</div>
            </li>
        </ul>
<!--        测试注释-->
    </div>
</template>

<script>
    import {computed} from 'vue'

    export default {
        name: "ClassifylistView",
        data() {
            return {

                classlist:computed(()=>this.$store.state.classlist),
                classifylist: {}


            }
        },
        mounted() {
            console.log(this.$route.query)
            console.log(this.classlist[5])
        }
    }
</script>

<style scoped>
.rightNav{
    background-color: white;
    float: right;
    width: 78.2%;
    height: 745px;
}
.rightNav>div{

    font-size: 14px;
    margin: 10px 0 10px 10px;
}
.content{
     width: 100%;
 }
    .content>li{
        width: 80px;
        height: 100%;
        float: left;
        margin-left: 20px;
        display:inline;
    }
    .content img{
        width: 100%;
        height: 100%;
    }
    .content div{
        text-align: center;
        font-size: 12px;
    }
</style>