<template>
  <div class="home">
    <header class="home__header">
      <p>So, you want to travel to</p>
      <h1 class="home__title">Space</h1>
    </header>
    <main class="home__main">
      <div class="home__text">
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button class="home__btn">explore</button>
    </main>
  </div>
</template>
<script>
export default {
  name: "Crew",
  data() {
    return {
      isActive: true,
    };
  },
  beforeCreate: function () {
    document.body.className = "crew-body";
  },
  beforeUnmount() {
    document.body.classList.remove("crew-body");
  },
};
</script>

<style lang="scss">
</style>
