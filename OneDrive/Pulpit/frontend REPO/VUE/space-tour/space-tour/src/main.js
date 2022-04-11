import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.scss'
import data from "./assets/data.json";

createApp(App).use(router).mount('#app')
