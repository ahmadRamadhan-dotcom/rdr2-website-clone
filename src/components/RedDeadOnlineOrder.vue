<template>
  <div
    v-if="edition === 'RedDeadOnline'"
    class="grid place-content-center sm:w-[500px] md:w-[700px] lg:w-[1000px] sm:mx-auto"
  >
    <span
      class="red_dead_one_edition sm:text-[44px] lg:text-[50px] font-['RDR_Lino'] text-[#fff] font-normal"
      >Red Dead Online
    </span>
    <p
      class="sm:text-sm lg:text-base text-[#fff] font-normal font-['Serif_Demibold'] sm:w-[540px] lg:w-[700px] xl:w-[880px]"
    >
      Step into the vibrant, ever-evolving world of Red Dead Online and
      experience life in frontier America. Chase down bounties, battle outlaw
      gangs and other players, hunt, fish and trade, search for exotic
      treasures, run Moonshine, and much more to discover in a world of
      astounding depth and detail.
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  edition: String,
});
</script>

<style scoped>
*::selection {
  background-color: red;
}
</style>
