<template >
  <div class="max-w-screen-xl m-auto">
    <Nav></Nav>

    <router-view />
  </div>
</template>


<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Nav from "./components/nav.vue";

export default {
  name: "App",
  components: { Nav },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    onMounted(() => {
      store.dispatch("getProducts");
    });
    return { products };
  },
};
</script>

<style lang="scss"></style>