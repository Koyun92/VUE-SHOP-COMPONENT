<template>
  <div class="subpage">
    <div class="subpage__img"></div>

    <div class="subpage__title">{{ data.name }}</div>
    <div class="subpage__text">
      <p>{{ data.description }}</p>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  name: "subpage",
  props: ["data"],
};
</script>
