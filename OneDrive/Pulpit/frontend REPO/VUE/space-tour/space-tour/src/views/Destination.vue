<template>
  <div class="subpage">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="data in data" :key="data.name">
        <subpage :data="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import data from "../assets/data.json";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import subpage from "@/components/subpage.vue";
import "swiper/swiper-bundle.css";
export default {
  name: "Destination",
  data() {
    return {
      data: data.destinations,
    };
  },

  beforeCreate: function () {
    document.body.className = "destination-body";
  },
  beforeUnmount() {
    document.body.classList.remove("destination-body");
  },
  components: {
    Swiper,
    SwiperSlide,
    subpage,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
</style>
