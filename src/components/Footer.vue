<template>
  <footer
    @click="sideBar = false"
    class="bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/footer/673d686c4197dc1c54f4182acf5b33f9.png')] h-72 z-20 bg-cover bg-top"
  ></footer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>
