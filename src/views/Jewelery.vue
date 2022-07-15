<template>Jewelery</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "Jewelery",
  setup() {
    const store = useStore();
    const products = computed(() =>
      store.state.products.filter((product) => {
        if (product.category === "jewelery") {
          return true;
        }
      })
    );
    const categoryProducts = computed((store) =>
      store.getters.categoriesGetter("jewelery")
    );
    return { products, categoryProducts };
  },
};
</script>

<style>
</style>