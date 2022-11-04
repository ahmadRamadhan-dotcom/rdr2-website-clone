<script setup>
import sideBarData from "../data/sideBarData";
import { useMainNavStore } from "../store/MainNavStore";
import { storeToRefs } from "pinia";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>

<template>
  <div
    id="sideBar"
    :class="sideBar ? 'block' : 'hidden'"
    class="sm:w-[400px] md:w-[430px] xl:w-[453px] 2xl:w-[475px] bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/header/b4e877252f9670ab112ba7740c5502f5.png')] bg-cover absolute h-screen pl-10 pt-3 top-10 flex flex-col overflow-auto"
  >
    <router-link
      v-for="(data, index) in sideBarData"
      id="list"
      :key="index"
      :to="data.to"
      :class="data.id == 6 ? 'flex flex-col' : ''"
      class="text-[#fff] font-['Redemption'] font-normal xl:text-[30px] hover:text-[#cc0000]"
      >{{ data.name }}
      <span
        v-if="data.id === 6"
        v-for="(dat, index) in data.children"
        class="p-3"
        >{{ dat.name }}</span
      >
    </router-link>
  </div>
</template>

<style scoped>
#list {
  scrollbar-color: black;
}
</style>
