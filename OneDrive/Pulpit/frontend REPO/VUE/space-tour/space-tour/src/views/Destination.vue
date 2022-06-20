<template>
  <div class="destination">
    <img
      :src="
        require(`../assets${$route.path}/image-${
          data[this.currentIndex].name
        }.png`)
      "
      :alt="data.name"
    />

    <swiper
      ref="mySwiper"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlide"
    >
      <swiper-slide v-for="data in data" :key="data.name">
        <subpage :pagination="pagination" :data="data" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import data from "../assets/data.json";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import subpage from "../components/subpage.vue";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";

export default {
  name: "Destination",

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
  data() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log(swiper.activeIndex);
    };

    return {
      data: data.destinations,
      currentIndex: 0,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          const names = ["MOON", "MARS", "EUROPA", "TITAN"];
          return '<span class="' + className + '">' + names[index] + "</span>";
        },
      },

      modules: [Pagination],
    };
  },
  methods: {
    onSlide(swiper) {
      console.log(swiper.activeIndex);
      this.currentIndex = swiper.activeIndex;
    },
  },
};
</script>

<style lang="css">
.swiper-pagination {
  position: static;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  width: 100%;
}
.swiper-pagination-bullet {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  background-color: transparent;
}
.swiper-pagination-bullet-active {
  background-color: transparent;
  border-bottom: 1px solid hsl(231, 77%, 90%);
  border-radius: 0%;
}
</style>
