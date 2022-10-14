<template>
    <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ul v-for="item of swiperlist" :key="item.id">
                    <li><img :src="item.src" alt=""><span>{{item.name}}</span></li>
                </ul>
            </div>
            <div class="swiper-slide">
                <ul v-for="item of swiperlistes" :key="item.id">
                    <li><img :src="item.src" alt=""><span>{{item.name}}</span></li>
                </ul>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

</template>

<script>
    import Swiper from "swiper";
    import {computed} from "vue";

    export default {
        name: "SwiperList",
        data() {
            return {
                swiperlist:computed(()=>this.$store.state.swiperlist),
                swiperlistes:computed(()=>this.$store.state.swiperlistes)
            }
        },
        mounted() {
            new Swiper('.swiper2', {
                autoplay: false,
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        margin-top: 10px;
    }

    ul > li {
        width: 20%;
        height: 10vh;
        float: left;
        font-size: .6rem;
        text-align: center;
        list-style-type: none;

    }

    ul > li img {
        width: 2.2rem;
        display: block;
        margin: 0 auto .6rem
    }

    ul a {
        text-decoration: none;
        color: #666666
    }

</style>