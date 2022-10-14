<template>
    <header>
        <div class="left" @click="fanhui">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: "SouSuoThreeCp",
        methods:{
            fanhui(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        width: 100%;
        height: 44px;

        background: white;
    }
    .left{
        width: 40px;
        height: 44px;
        margin-top: 5px;
    }
    .center{
        color: #333;
        flex: 1;
        font-size: 18px;
        height: 44px;
        line-height: 44px;
        min-width: 0;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .right{
        margin-top: 5px;
        width: 45px;
        height: 44px;
    }
</style>