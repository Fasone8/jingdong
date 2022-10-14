<template>
    <div class="s1">
        <div class="swiper-container swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item of swiperone" :key="item.id">
                    <img :src="item.url" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import {computed} from "vue";

    export default {
        name: "SwiperOneWzkCom",
        data() {
            return {



                swiperone:computed(()=>this.$store.state.swiperone)




            }
        },
        mounted() {
            new Swiper('.swiper1', {
                autoplay: {
                    stopOnLastSlide:true,
                },
                observer: true, //修改swiper自己或子元素时，自动初始化swiper，主要是这两行
                observeParents: true ,//修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        }
    }
</script>

<style scoped>
    .swiper-slide > img {
        width: 100%;

    }

    .swiper-slide {
        width: 100% !important;
        border-radius: 5%;
    }

    .swiper-container {
        width: 94%;
        margin-top: 45px;
    }

    .s1 {
        width: 100%;
        background: linear-gradient(to bottom, red 0%, red 50%, white 51%, white 100%);
    }


</style>