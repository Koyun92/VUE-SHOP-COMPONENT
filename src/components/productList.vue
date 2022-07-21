<template>
  <ul>
    <li v-for="product in categoryItems" :key="product.id">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" alt="" />
      <p>{{ product.description }}</p>
      <button>add to cart</button>
    </li>
  </ul>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "ProductList",
  setup() {
    const route = useRoute();
    const store = useStore();

    const categoryItems = store.getters.categoriesGetter(route.name);

    return { route, categoryItems };
  },
};
</script>

<style>
</style>