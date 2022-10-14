<template>
    <header>
        <router-link :to="{path:'/classify-view',query:{id:0}}">
            <div class="left">
                <svg class="icon">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
            </div>
        </router-link>

        <div class="center" @click="sousuo">
            <div></div>
            <span class="a">|</span>
            <svg class="icon1">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <span class="b">美的高压锅</span>
        </div>
        <router-link to="/weidenglu-view">
            <div class="right">
                <span>登录</span>
            </div>
        </router-link>
    </header>
</template>

<script>
    export default {
        name: "SouSuoCp",
        methods: {
            sousuo() {
                this.$router.push('/sousuo-view')
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        width: 100%;
        height: 45px;
        background: #e43130;
        position: fixed;
        top: 0;
        text-align: center;
        z-index: 1000;
    }

    .left {
        width: 40px;
        height: 44px;
        margin-right: 0;
    }

    .icon {
        width: 26px;
        height: 26px;
        margin-top: 8px;
    }

    .center {
        flex: 1;
        width: 300px;
        height: 30px;
        background: white;
        margin-top: 5px;
        border-radius: 15px;
        position: relative;
    }

    .center > div {
        width: 20px;
        height: 15px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=");
        background-size: 20px 15px;
        position: absolute;
        left: 13px;
        top: 7px;

    }

    .icon1 {
        width: 18px;
        height: 15px;
        position: absolute;
        top: 6px;
        left: 48px;
    }

    .a {
        color: lightgrey;
        position: absolute;
        top: 2px;
        left: 40px;
    }

    .b {
        font-size: 14px;
        color: lightgrey;
        position: absolute;
        top: 4px;
        left: 69px;
    }

    .right {
        width: 40px;
        height: 44px;
        text-align: center;
        margin-top: 6px;
    }

    .right > span {
        font-size: 14px;

        color: white;
    }
</style>