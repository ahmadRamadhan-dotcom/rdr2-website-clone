<template>
  <div
    v-if="edition === 'StandardEdition'"
    class="grid place-content-center w-10/12 mx-auto sm:mx-0 sm:w-[500px] md:w-[700px] lg:w-[1000px]"
  >
    <span
      class="red_dead_one_edition text-[44px] lg:text-[50px] font-['RDR_Lino'] text-[#fff] font-normal"
      >StandardEdition
    </span>
    <p
      class="text-sm lg:text-base text-[#fff] sm:w-[500px] lg:w-[700px] xl:w-[900px] text-center font-['Serif_Demibold'] font-normal"
    >
      Upgrade to the Red Dead Redemption 2: Special Edition and gain access to
      exclusive content for Story Mode or get the Red Dead Redemption 2:
      Ultimate Edition to receive all the Story Mode content from the Special
      Edition plus additional bonuses for Red Dead Online.
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  edition: String,
});
</script>
