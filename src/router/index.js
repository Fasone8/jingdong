import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '../views/IndexView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView
        },
        {
            path: '/classify-view',
            name: 'classify',
            component: () => import('../views/ClassifyView.vue'),
            children: [
                {
                    path: '',
                    component: () => import('../views/Classify/ClassifylistView.vue')
                }
            ]
        }, {
            path: '/price-view',
            name: 'price',
            component: () => import('../views/PriceView.vue')
        }, {
            path: '/shoppingcart-view',
            name: 'shoppingcart',
            component: () => import('../views/ShoppingcartView.vue')
        }, {
            path: '/profile-view',
            name: 'profile',
            component: () => import('../views/ProfileView.vue')
        },
        {
            path: '/sousuo-view',
            name: 'sousuo',
            component: () => import('../views/header/SouSuoView.vue')
        },

        {

            path: '/weidenglu-view',
            name: 'weidenglu',
            component: () => import('../views/header/WeiDengLuHhbView.vue')
        },
        {
            path: '/miaosha-view',
            name: 'miaosha',
            component: () => import('../views/MiaoShaView.vue')
        }
        ,
        {
            path: '/goods-view',
            name: 'goods',
            component: () => import('../views/goods/GoodsView.vue')
        },
        {
            path: '/pay-view',
            name: 'pay',
            component: () => import('../views/PayView.vue')
        }
    ]
})

export default router
