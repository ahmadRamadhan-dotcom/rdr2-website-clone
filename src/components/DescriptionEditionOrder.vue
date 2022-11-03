<template>
  <div
    :class="
      edition == 'UltimateEdition' || edition === ''
        ? 'sm:mt-32 xl:mt-40'
        : 'sm:mt-[120px] xl:mt-24'
    "
  >
    <div class="text-center grid place-content-center">
      <UltimateEditionOrder :edition="edition" />
      <RedDeadOnlineOrder :edition="edition" />
      <StandardEditionOrder :edition="edition" />
      <p></p>
    </div>
  </div>
</template>

<script setup>
import RedDeadOnlineOrder from "./RedDeadOnlineOrder.vue";
import UltimateEditionOrder from "./UltimateEditionOrder.vue";
import StandardEditionOrder from "./StandardEditionOrder.vue";
const props = defineProps({
  edition: String,
});
</script>

<style scoped>
*::selection {
  background-color: red;
}
</style>
