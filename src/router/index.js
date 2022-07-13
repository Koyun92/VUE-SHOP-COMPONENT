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
    name: 'Jewelery',

    component: () => import('../views/Jewelery.vue')
}, {
    path: '/mensClothing',
    name: 'Mens clothing',

    component: () => import('../views/MensClothing.vue')
}, {
    path: "/womensClothing",
    name: "Women's clothing",

    component: () => import('../views/WomenClothing.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,

})

export default router