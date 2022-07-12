<template>
  <header
    class="
      lg:border-b lg:border-GrayishBlue lg:px-8
      flex
      justify-between
      items-center
      p-2 
    "
  >
    <div class="flex items-center">
      <img
        src="@/assets/images/icon-menu.svg"
        alt="icon menu open "
        @click="toggleMenu()"
        class="mr-4 lg:hidden"
      />
      <img src="@/assets/images/logo.svg" />
    </div>

    <transition
      enter-active-class="duration-300 ease-in-out"
      enter-from-class="transform opacity-0"
      leave-active-class="duration-300  "
      leave-to-class="transform opacity-0"
    >
      <div
        v-show="isActive"
        class="
          lg:hidden
          fixed
          w-screen
          h-screen
          left-0
          top-0
          bg-black bg-opacity-75
        "
      >
        <transition
          enter-active-class="duration-300 delay-100 ease-in-out"
          enter-from-class="-left-full"
          enter-to-class="left-0"
          leave-active-class="duration-300 "
          leave-from-class="left-0"
          leave-to-class="-left-full"
        >
          <nav
            v-show="isActive"
            class="absolute left-0 top-0 h-full bg-white w-8/12 p-2.5 max-w-xs"
          >
            <img
              class="mb-10"
              src="@/assets/images/icon-close.svg"
              alt="icon menu close"
              @click="toggleMenu()"
            />
            <ul class="leading-loose font-bold">
              <li class="">Collections</li>
              <li class="">Men</li>
              <li class="">Women</li>
              <li class="">About</li>
              <li class="">Contact</li>
            </ul>
          </nav>
        </transition>
      </div>
    </transition>
    <nav
      class="
        lg:flex lg:flex-grow lg:justify-start lg:items-center
        text-DarkGrayishBlue
        hidden
      "
    >
      <ul class="flex ml-12 items-center h-full">
        <li class="pr-8 py-8 hover:border-b">Collections</li>
        <li class="pr-8 py-8">Men</li>
        <li class="pr-8 py-8">Women</li>
        <li class="pr-8 py-8">About</li>
        <li class="pr-8 py-8">Contact</li>
      </ul>
    </nav>
    <div class="flex h-full items-center">
      <img class="lg:mr-12 mr-4" src="@/assets/images/icon-cart.svg" alt="" />
      <img
        class="lg:h-12 lg:max-h-12 h-8"
        src="@/assets/images/image-avatar.png"
        alt=""
      />
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Nav",

  setup() {
    const isActive = ref(false);
    function toggleMenu() {
      console.log("clicked");
      isActive.value = !isActive.value;
    }
    return { isActive, toggleMenu };
  },
};
</script>

<style scoped>
</style>
