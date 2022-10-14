<template>

    <SouSuoCp/>
    <SwiperOneWzkCom/>
    <SwiperList/>
    <NavWzkCom/>
    <GoodsListWz/>
    <TabBarWz/>

</template>

<style scoped>

</style>
<script>
    import SwiperOneWzkCom from "../components/swiper/SwiperOneWzkCom.vue";
    import SwiperList from "../components/swiper/SwiperList.vue";
    import SouSuoCp from "../components/header/SouSuoCp.vue";
    import NavWzkCom from "../components/Nav/NavWzkCom.vue";
    import GoodsListWz from "../components/goods/GoodsListWz.vue";


    export default {

        components: {
            SwiperOneWzkCom,
            SouSuoCp,
            SwiperList,
            NavWzkCom,
            GoodsListWz,

        },

    }

</script>