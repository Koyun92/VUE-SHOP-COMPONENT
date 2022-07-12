<template >
  <div class="max-w-screen-xl m-auto">
    <Nav></Nav>
    <Product></Product>
    <ProductList></ProductList>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
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
    const items = ref([
      {
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
      },
    ]);
    onMounted(() => {
      document.body.classList.add("overflow-hidden");
    });
    return { items, products };
  },
};
</script>

<style lang="scss"></style>
