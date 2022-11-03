<template>
  <a
    class="container_card w-11/12 md:w-[28%] lg:w-[30%] 2xl:w-[31%]"
    href=""
    v-for="(data, index) in featuresData"
  >
    <div
      id="card"
      class="overflow-hidden hover:sepia-[.25] grid place-content-center"
    >
      <img :src="data.image" alt="" class="hover:scale-[1.1] object-cover" />
      <span
        class="text-[#fff] mt-10 uppercase text-center z-[2] font-['Redemption'] font-normal text-[32px] lg:text-4xl"
        id="desc"
        >{{ data.desc }}</span
      >
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  featuresData: Array,
});
</script>

<style scoped>
img {
  transition: all 0.3s ease;
}

#card:hover #desc {
  color: #cc0000;
}
</style>
