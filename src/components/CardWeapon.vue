<template>
  <div
    v-for="(data, index) in weaponRyData"
    :key="index"
    class="md:w-[48%] 2xl:w-[49%]"
  >
    <a class="text-center" :href="data.url" target="_blank">
      <img :src="data.image" alt="" />
      <p
        class="font-['UniversCondesed'] mx-auto w-11/12 font-normal text-[#fff] text-base text-center"
      >
        {{ data.desc }}
      </p>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  weaponRyData: Array,
});
</script>
