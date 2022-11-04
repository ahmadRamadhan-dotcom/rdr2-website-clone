<template>
  <div
    @click="sideBar = false"
    :class="sideBar ? 'sepia-[.75] blur-[2px]' : ''"
    id="home"
  >
    <Banner />
    <Overview />
    <Features />
    <Outlaw />
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import Overview from "../components/Overview.vue";
import Features from "../components/Features.vue";
import Outlaw from "../components/Outlaw.vue";
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);
</script>
