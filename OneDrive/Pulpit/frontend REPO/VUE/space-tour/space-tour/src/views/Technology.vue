<template>
  <div class="home">
    <header class="home__header">
      <p>So, you want to travel to</p>
      <h1 class="home__title">Space</h1>
    </header>
    <main class="home__main">
      <div class="home__text"></div>
      <button class="home__btn">explore</button>
    </main>
  </div>
</template>
<script>
export default {
  name: "Technology",
  data() {
    return {
      isActive: true,
    };
  },
  beforeCreate: function () {
    document.body.className = "technology-body";
  },
  beforeUnmount() {
    document.body.classList.remove("technology-body");
  },
};
</script>

<style lang="scss">
</style>
