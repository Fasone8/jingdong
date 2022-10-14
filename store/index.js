import {createStore} from 'vuex'
import axios from "axios";

const store=createStore({
    state(){
        return{
            goodslist:[],
            swiperlist:[],
            swiperlistes:[],
            swiperone:[],
            miaoshaone:[],
            miaoshatwo:[],
            navlist:[],
            classlist:[],
            administrators:[]
        }
    },
    mutations: {
        getGoodsList(state, data) {
            state.goodslist = data
        },
        getSwiperList(state, data) {
            state.swiperlist = data
        },
        getSwiperListes(state, data) {
            state.swiperlistes = data
        },

        getSwiperOne(state,data){
            state.swiperone=data

        },
        getMiaoShaOne(state, data) {
            state.miaoshaone = data
        },
        getMiaoShaTwo(state, data) {
            state.miaoshatwo = data
        },
        getNavList(state, data) {
            state.navlist = data
        },
        getClassList(state,data){
            state.classlist=data

        },
        getAdministrators(state,data){
            state.administrators=data

        }
    },
    actions: {
        getGoodsList(context) {
            axios.get('http://localhost:3000/get-goodslist')
                .then(response => {
                    // console.log(response.data)
                    // console.log(response.data)
                    context.commit('getGoodsList', response.data)
                })
        },
        getSwiperList(context) {
            axios.get('http://localhost:3000/get-swiperlist')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getSwiperList', response.data)
                })
        },
        getSwiperListes(context) {
            axios.get('http://localhost:3000/get-swiperlistes')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getSwiperListes', response.data)
                })
        },
        getSwiperOne(context) {
            axios.get('http://localhost:3000/get-swiperone')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getSwiperOne', response.data)
                })
        },
        getMiaoShaOne(context) {
            axios.get('http://localhost:3000/get-miaoshaone')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getMiaoShaOne', response.data)
                })
        },
        getMiaoShaTwo(context) {
            axios.get('http://localhost:3000/get-miaoshatwo')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getMiaoShaTwo', response.data)
                })
        },

        getNavList(context) {
            axios.get('http://localhost:3000/get-navlist')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getNavList', response.data)
                })
        },
        getClassList(context) {
            axios.get('http://localhost:3000/get-classlist')
                .then(response => {
                    // console.log(response.data)
                    context.commit('getClassList', response.data)
                })
        },
        getAdministrators(context) {
            axios.get('http://localhost:3000/get-administrators')
                .then(response => {
                    console.log(response.data)
                    context.commit('getAdministrators', response.data)
                })
        },
    }
})

export default store