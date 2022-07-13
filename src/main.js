import {
    createApp
} from "vue";
import App from "./App.vue";
import router from './router'

import {
    createStore
} from "vuex";
import axios from 'axios';
// Create a new store instance or import from module.
const store = createStore({

    state: {
        cart: [],
        products: [],
    },
    mutations: {
        ADD_TO_CART(state, {
            products,
            quantity
        }) {
            state.cart.push({
                products,
                quantity
            })
        },

        SET_PRODUCTS(state, products) {
            state.products = products

        }
    },
    actions: {
        addToCart({
            commit
        }, {
            products,
            quantity
        }) {
            commit('ADD_TO_CART', {
                products,
                quantity
            });
        },
        getProducts({
            commit
        }) {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    commit('SET_PRODUCTS', response.data);
                })
        }
    }
});
import('@/assets/styles/main.css');
import "./assets/tailwind.css";
createApp(App).use(store).use(router).mount("#app");