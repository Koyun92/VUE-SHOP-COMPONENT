<template >
  <div class="max-w-screen-xl m-auto">
    <Nav></Nav>
    <router-view />
    <Product></Product>
    <ProductList></ProductList>
  </div>
</template>


<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Nav from "./components/nav.vue";
import Product from "./components/product.vue";
import ProductList from "./components/productList.vue";
export default {
  name: "App",
  components: { Nav, Product, ProductList },

  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    onMounted(() => {
      document.body.classList.add("overflow-hidden");
    });
    return { products };
  },
};
</script>

<style lang="scss"></style>
