import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import '@/assets/css/style.css'
import '@/assets/css/media.css'


Vue.use(VueRouter)
const routes = [{
        path: '/Home',
        name: 'Profile',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: function() {
            return import ('../views/About.vue')
        }
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: function() {
            return import ('../views/calculator.vue')
        }
    },
    {
        path: '/standard-calculator',
        name: 'standard-calculator',
        component: function() {
            return import ('../views/standard.vue')
        }
    },
    {
        path: '/programmer-calculator',
        name: 'programmer-calculator',
        component: function() {
            return import ('../views/Programmer.vue')
        }
    },
    {
        path: '/register',
        name: 'register',
        component: function() {
            return import ('../views/register.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: function() {
            return import ('../views/Login.vue')
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router