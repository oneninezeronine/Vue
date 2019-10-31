import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
const routes = [{
        // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
        path: '/home',
        component: Home
    },
    {
        // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
        path: '/recover',
        component: Recover
    }
]
const router = new VueRouter({
    routes
})
export default router