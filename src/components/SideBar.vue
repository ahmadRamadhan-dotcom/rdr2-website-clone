<script setup>
import { useMainNavStore } from "../store/MainNavStore";
import { storeToRefs } from "pinia";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>

<template>
  <div
    id="sideBar"
    :class="sideBar ? 'block' : 'hidden'"
    class="sm:w-[400px] md:w-[430px] xl:w-[453px] 2xl:w-[475px] bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/header/b4e877252f9670ab112ba7740c5502f5.png')] bg-cover absolute h-screen top-10"
  >
    <a href="#" class="text-[#fff]">
      <span></span>
      hai
    </a>
  </div>
</template>

<style scoped></style>
