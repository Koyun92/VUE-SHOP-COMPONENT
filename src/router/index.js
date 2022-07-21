import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',


    component: () => import('../views/Home.vue')
}, {
    path: '/jewelery',
    name: 'jewelery',

    component: () => import('../views/Jewelery.vue')
}, {
    path: '/mensClothing',
    name: "men's clothing",

    component: () => import('../views/MensClothing.vue')
}, {
    path: "/womenClothing",
    name: "women's clothing",

    component: () => import('../views/WomenClothing.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,

})

export default router