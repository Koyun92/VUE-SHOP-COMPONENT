<template>sas</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { onMounted } from "vue";
export default {
  name: "ProductList",
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    store.dispatch("getProducts");

    onMounted(() => {
      console.log(`the component is now mounted.`);
    });
    return [products];
  },
};
</script>

<style>
</style>