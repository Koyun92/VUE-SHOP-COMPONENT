import {
    createApp
} from "vue";
import App from "./App.vue";


import {
    createStore
} from "vuex";
// Create a new store instance or import from module.
const store = createStore({
    state: {
        cart: [],
        products: [{
            id: 0,
            name: "Fall Limited Edition Sneakers",
            description: `Sneakers These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer`,
            price: 250,
            images: {
                thumbnails: [
                    "image-product-1-thumbnail.jpg",
                    "image-product-1-thumbnail.jpg",
                    "image-product-3-thumbnail.jpg",
                    "image-product-4-thumbnail.jpg",
                ],
                normal: [
                    "image-product-1.jpg",
                    "image-product-2.jpg",
                    "image-product-3.jpg",
                    "image-product-4.jpg",
                ],
            },
        }],
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
        }
    }
});
import('@/assets/styles/main.css');
import "./assets/tailwind.css";
createApp(App).use(store).mount("#app");