import Vue from 'vue/dist/vue'
import 'weui'
import './assets/styles.scss'

//  View
import headerView from './view/header.html'
import searchView from './view/search.html'
import panelView from './view/panel.html'
import tabbarView from './view/tabbar.html'

// Model
import iconTabbar from './assets/icon_tabbar.png'
import headerModel from './model/header'
import searchModel from './model/search'
import panelModel from './model/panel'
import tabbarModel from './model/tabbar'

const vm = new Vue({
    el: '#app',
    data: {
        iconTabbar,
        headerModel: headerModel.data,
        searchModel: searchModel.data,
        panelModel: panelModel.data,
        tabbarModel: tabbarModel.data
    },
    methods: {
        ...headerModel.methods,
        ...searchModel.methods,
        ...panelModel.methods,
        ...tabbarModel.methods
    },
    template: `
        <div>
            ${headerView}
            ${searchView}
            ${panelView}
            ${tabbarView}
        </div>
    `
})