<template>
  <article>
    <img
      :src="`${require(`@/assets/images/${products[0].images.normal[0]}`)}`"
      alt=""
    />
    <h2>{{ products[0].brand }}</h2>
    <h1>{{ products[0].name }}</h1>
    <p>{{ products[0].description }}</p>
    <section>
      <h3>{{ products[0].price }}</h3>
      <p>50%</p>
      <h3>{{ products[0].price / 2 }}</h3>
      <button @click="addToCart(products)">add to cart</button>
    </section>
  </article>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "Product",

  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    function addToCart(product) {
      store.dispatch("addToCart", {
        products: product,
        quantity: 1,
      });
    }
    return { products, addToCart };
  },
};
</script>

<style>
</style>