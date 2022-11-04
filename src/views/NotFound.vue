<template>
  <div
    :class="{ 'sepia-[.75] blur-[2px]': sideBar }"
    class="h-screen flex justify-center items-center bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/bg/200a43a068ec998508926f7a070b4e3e.jpg')] bg-cover"
    @click="sideBar = false"
  >
    <p class="text-white text-center text-7xl">
      Sorry this page doesn't exits, back to
      <router-link to="/" class="font-bold border-b-2">home</router-link>
    </p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>
