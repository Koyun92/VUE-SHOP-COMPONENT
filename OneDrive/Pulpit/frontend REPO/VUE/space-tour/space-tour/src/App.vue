<template>
  <div class="wrapper">
    <header>
      <nav class="nav">
        <div class="nav__rectangle"></div>
        <img src="./assets/shared/logo.svg" class="nav__logo" alt="" />
        <Transition name="showUp">
          <ul v-if="navVisible" class="nav__list nav__mobile">
            <li class="nav__item" @click="showNav()">
              <router-link class="nav__link link" to="/"
                ><span>00</span> Home</router-link
              >
            </li>
            <li class="nav__item" @click="showNav()">
              <router-link class="nav__link link" to="/destination"
                ><span>01</span> Destination</router-link
              >
            </li>
            <li class="nav__item" @click="showNav()">
              <router-link class="nav__link link" to="/crew"
                ><span>02</span> Crew</router-link
              >
            </li>
            <li class="nav__item" @click="showNav()">
              <router-link class="nav__link link" to="/technology"
                ><span>03</span> Technology</router-link
              >
            </li>
          </ul>
        </Transition>
        <ul class="nav__desktop nav__list">
          <li class="nav__item">
            <router-link class="nav__link link" to="/"
              ><span>00</span> Home</router-link
            >
          </li>
          <li class="nav__item">
            <router-link class="nav__link link" to="/destination"
              ><span>01</span> destination</router-link
            >
          </li>
          <li class="nav__item">
            <router-link class="nav__link link" to="/crew"
              ><span>02</span> crew</router-link
            >
          </li>
          <li class="nav__item">
            <router-link class="nav__link link" to="/technology"
              ><span>03</span> technology</router-link
            >
          </li>
        </ul>

        <div class="nav__icon-container" @click="showNav()">
          <Transition name="appear">
            <img
              v-if="navVisible"
              src="./assets/shared/icon-close.svg"
              class="nav__icon nav__icon--close"
              alt=""
            />
            <img
              v-else
              src="./assets/shared/icon-hamburger.svg"
              class="nav__icon nav__icon--open"
              alt=""
            />
          </Transition>
        </div>
      </nav>
    </header>

    <router-view />
  </div>
</template>
<script>
import data from "./assets/data.json";
export default {
  name: "App",

  data() {
    return {
      navVisible: false,
    };
  },
  methods: {
    showNav() {
      this.navVisible = !this.navVisible;
    },
  },
};
</script>

<style lang="scss">
</style>
