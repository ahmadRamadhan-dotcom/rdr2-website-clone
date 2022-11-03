<template>
  <div
    v-for="(data, index) in defaultDisplay"
    :key="index"
    v-if="selected == ''"
    class="sm:mt-10"
  >
    <div v-for="(dat, index) in data.image" :key="index">
      <figure v-show="edition === ''" v-if="dat[0] === 'UltimateEdition'">
        <img :src="dat[1]" alt="" class="sm:max-h-[33em] lg:max-h-[70em]" />
      </figure>
      <figure v-if="dat[0] == edition">
        <img
          :src="dat[1]"
          alt=""
          class="sm:max-h-[33em] sm:mx-auto md:max-h-[50em] xl:max-h-[70em]"
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
