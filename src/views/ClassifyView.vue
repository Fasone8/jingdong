<template>
    <div class="header">
        <span @click="back" class="backto">
            <router-link to="/">
                <svg class="icon" v-if="$route.path!=='/'">
                    <use xlink:href="#icon-jiantou_liebiaoxiangzuo"></use>
                </svg>
            </router-link>
        </span>
        <input class="searchto" placeholder="美的高压锅" type="button" @click="search">
        <span class="val">美的高压锅</span>
    </div>

    <ClassifylistCom/>
    <router-view/>
    <TabBarWz/>
</template>

<script>
    import ClassifylistCom from "../components/Nav/ClassifylistCom.vue";

    export default {
        name: "ClassifyView",
        components: {
            ClassifylistCom
        },
        data() {
            return {}
        },
        methods: {
            back() {
                this.$router.push('/')
            },
            search(){
                this.$router.push('/sousuo-view')
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 44px;
        background-color: #ffffff;
        /*box-shadow:0 0 10px #8b8b8b;*/
border-bottom:1px #8b8b8b solid;
        /*display: flex;*/
    }

    .backto svg {
        width: 40px;
        height: 100%;
    }

    .searchto {
        /*flex: 1;*/
        width: 300px;
        height: 25px;
        background: #f8f8f8;
        /*margin-top: 5px;*/
        margin-bottom: 10px;
        margin-left: 10px;
        border-radius: 15px;
        padding-left: 20px;
        border: 0;
        /*outline: none;*/
    }
    .header>div{
        width: 20px;
        height: 15px;
        background-size: 20px 15px;
        position: absolute;
        left: 13px;
        top: 7px;
    }
    .val{
        font-size: 14px;
        color: #666666;
        position: absolute;
        top: 10px;
        left: 69px;
    }


</style>