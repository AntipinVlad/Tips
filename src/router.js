import Vue from 'vue'
import Router from 'vue-router'
import firstpage from './views/FirstPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        component: firstpage
    },
    {
        path: '/list',
        component: () => import('./views/List')
    },]
})