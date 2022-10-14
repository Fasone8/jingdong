import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "../store";
import axios from "axios";
import VueAxios from "vue-axios"
import '@/assets/css/index.css'
import('../node_modules/swiper/dist/css/swiper.min.css')
import('../node_modules/swiper/dist/js/swiper')
import TabBarWz from "./components/tab/TabBarWz.vue";


const app = createApp(App)


app
    .use(router)
    .use(router)
    .use(store)
    .use(VueAxios,axios)
    .component('TabBarWz',TabBarWz)

app.mount('#app')

