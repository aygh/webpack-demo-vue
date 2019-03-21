import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import home from '../views/home.vue'
// import about from '../views/about.vue'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/about',
            component: () => import('../views/about.vue')
        }
    ]
})