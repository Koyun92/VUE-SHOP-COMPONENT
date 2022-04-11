<template>
  <div class="home">
    <div class="home__container">
      <header class="home__header">
        <p class="home__title-before">So, you want to travel to</p>
        <h1 class="home__title">Space</h1>
      </header>

      <p class="home__text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <button class="home__btn">explore</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },

  beforeCreate: function () {
    document.body.className = "home-body";
  },
  beforeUnmount() {
    document.body.classList.remove("home-body");
  },
};
</script>

<style lang="scss">
</style>
