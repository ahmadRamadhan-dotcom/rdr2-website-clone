<template>
  <div v-for="(data, index) in platformData" :key="index">
    <div v-if="data.platform === selected">
      <div v-for="(dat, index) in data.image" :key="index">
        <figure v-if="dat[0] == edition">
          <img
            :src="dat[1]"
            alt=""
            class="max-h-[25em] mx-auto sm:mx-0 sm:max-h-[33em] md:mx-auto xl:max-h-[70em]"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  platformData: Array,
  selected: String,
  edition: String,
});
</script>
