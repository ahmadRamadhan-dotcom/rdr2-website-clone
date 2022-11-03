<template>
  <div
    v-if="edition === 'UltimateEdition' || edition === ''"
    class="sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-full"
  >
    <span
      class="ultimate_edition sm:text-[44px] md:text-[47px] lg:text-[50px] font-['RDR_Lino'] text-[#fff] font-normal"
      >Ultimate Edition</span
    >
    <p
      class="text-[#fff] md:w-[550px] md:text-center md:mx-auto description font-['Serif_Demibold'] font-normal sm:text-sm md:text-[15px] lg:text-base"
    >
      The Red Dead Redemption 2: Ultimate Edition delivers all the Story Mode
      content from the Special Edition plus additional bonuses for Red Dead
      Online.
    </p>
    <p
      class="font-['RDR_Lino'] mt-7 font-normal sm:text-[26px] md:text-[28px] xl:text-[30px] 2xl:text-[34px] text-[#fff]"
    >
      Get Exclusive Storymode Content Including:
    </p>
    <div class="flex justify-center">
      <div
        class="xl:w-[1250px] 2xl:w-full sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-4"
      >
        <div
          v-for="(data, index) in ultimateEditionData"
          :key="index"
          class="grid gap-2 xl:w-[420px] 2xl:max-w-[60vh]"
        >
          <img :src="data.image" alt="" />
          <p class="font-['RDR_Lino'] font-normal text-[#fff] text-xl">
            {{ data.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ultimateEditionData from "../data/ultimateEdition";
const props = defineProps({
  edition: String,
});
</script>

<style scoped>
*::selection {
  background-color: red;
}
</style>
