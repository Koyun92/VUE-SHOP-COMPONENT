
<template>
  Women
  <ProductList></ProductList>
</template>

<script>
import ProductList from "../components/productList.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "Women's clothing",
  components: { ProductList },
  setup() {
    const store = useStore();
    const products = computed(() =>
      store.state.products.filter((product) => {
        if (product.category === "jewelery") {
          return true;
        }
      })
    );

    return { products };
  },
};
</script>

<style>
</style>