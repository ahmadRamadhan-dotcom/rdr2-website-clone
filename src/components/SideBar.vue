<script setup>
import { useMainNavStore } from "../store/MainNavStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  sideBarData: Array,
});

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>

<template>
  <div
    id="sideBar"
    :class="sideBar ? 'fixed' : 'hidden'"
    class="w-[200px] sm:w-[400px] md:w-[430px] xl:w-[453px] 2xl:w-[475px] bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/header/b4e877252f9670ab112ba7740c5502f5.png')] bg-cover absolute h-[200vh] sm:h-screen pl-10 pt-3 top-10 flex flex-col overflow-auto"
  >
    <router-link
      v-for="(data, index) in sideBarData"
      :key="index"
      :class="{ 'ml-3': data.id === 7 }"
      class="text-[#fff] text-xl lg:text-[30px] font-['Redemption'] hover:text-[#c00]"
      :to="data.to"
    >
      {{ data.name }}
    </router-link>
  </div>
</template>

<style scoped>
#list {
  scrollbar-color: black;
}

.active {
  color: #c00;
}
</style>
