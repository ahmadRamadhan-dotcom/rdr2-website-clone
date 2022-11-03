<template>
  <div id="features" class="bg-[#000] flex justify-center mt-3">
    <div class="flex flex-wrap justify-center gap-10">
      <Card :features-data="featuresData" />
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import featuresData from "../data/featuresData";
</script>
