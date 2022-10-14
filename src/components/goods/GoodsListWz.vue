<template>
    <div class="goodsList">
        <ul>
            <GoodsListItemWz v-for="item of goodslist" :key="item.id" :goodslist="item">

            </GoodsListItemWz>
        </ul>
    </div>
</template>

<script>
    import GoodsListItemWz from "./GoodsListItemWz.vue";
    import {computed} from 'vue'
    export default {
        name: "GoodsListWz",
        components: {GoodsListItemWz},
       data(){
            return {
                goodslist:computed(()=>this.$store.state.goodslist)
            }
       }
    }
</script>

<style scoped>
    .goodsList{width: 100%;}
    .goodsList::after{height: 50px;display: inline-block;content: "";width: 100%}
</style>