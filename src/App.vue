<template>
    <router-view/>


</template>


<script>
    import TabBarWz from "./components/tab/TabBarWz.vue";

    export default {
        components: {
            TabBarWz
        },
        created() {
            this.$store.dispatch('getGoodsList')
            this.$store.dispatch('getSwiperList')
            this.$store.dispatch('getSwiperListes')
            this.$store.dispatch('getSwiperOne')
            this.$store.dispatch('getMiaoShaOne')
            this.$store.dispatch('getMiaoShaTwo')
            this.$store.dispatch('getNavList')
            this.$store.dispatch('getClassList')
            this.$store.dispatch('getAdministrators')
        }
    }


</script>

<style scoped>

</style>
