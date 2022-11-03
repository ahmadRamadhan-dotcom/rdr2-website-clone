<template>
  <div
    v-for="(data, index) in defaultDisplay"
    :key="index"
    v-if="selected == ''"
    class="mt-10"
  >
    <div v-for="(dat, index) in data.image" :key="index">
      <figure v-show="edition === ''" v-if="dat[0] === 'UltimateEdition'">
        <img
          :src="dat[1]"
          alt=""
          class="max-h-[27em] mx-auto sm:mx-0 sm:max-h-[33em] lg:max-h-[70em]"
        />
      </figure>
      <figure v-if="dat[0] == edition">
        <img
          :src="dat[1]"
          alt=""
          class="h-[27em] sm:max-h-[33em] mx-auto md:max-h-[50em] xl:max-h-[70em]"
        />
      </figure>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  defaultDisplay: Array,
  selected: String,
  edition: String,
});
</script>
