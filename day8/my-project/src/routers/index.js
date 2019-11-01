import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import Main from '../pages/Main.vue'
const routes = [{
        // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
                // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
                path: 'home',
                name: 'home',
                component: Home,
                // 别名
                alias: 'h',
            }, {
                // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
                path: 'recover',
                name: 'recover',
                component: Recover
            },
            {
                path: 'order',
                name: 'order',
                component: Order
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            },
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    // 默认重定向
    {
        path: '/',
        redirect: '/main/home'
    }
]
const router = new VueRouter({
    // hash
    mode: 'history',
    routes
})
export default router