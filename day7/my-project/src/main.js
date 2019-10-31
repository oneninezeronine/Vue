import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores'
import router from './routers'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  // vue-router
  router,
  // vuex
  store,
  render: h => h(App),
}).$mount('#app')