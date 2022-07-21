<template>
  Jewelery
  <ProductList></ProductList>
  <basketMini></basketMini>
</template>

<script>
import basketMini from "../components/basketMIni.vue";
import ProductList from "../components/productList.vue";

export default {
  name: "Jewelery",
  components: { ProductList, basketMini },
  setup() {},
};
</script>

<style>
</style>