<template>
  <div
    id="info"
    :class="{ 'sepia-[.75] blur-[2px]': sideBar }"
    class="bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/bg/200a43a068ec998508926f7a070b4e3e.jpg')] min-h-screen relative -mb-[35px] flex justify-center"
    @click="hideSideBar"
  >
    <div
      class="w-11/12 sm:w-[94%] md:w-9/12 lg:w-[1000px] xl:w-[1200px] 2xl:w-9/12 lg:flex xl:gap-2"
    >
      <div class="lg:w-[480px] xl:w-[650px] 2xl:w-[700px] mt-4 pb-14">
        <img
          src="https://www.rockstargames.com/reddeadredemption2/dist/img/en_us/0b7957d72fb72a313fa84c0359054fd8.jpg"
          alt=""
          class="w-full"
        />
      </div>
      <div
        class="lg:w-[480px] 2xl:w-5/12 pb-20 lg:pb-0 lg:ml-14 xl:ml-24 grid gap-4 place-content-center"
      >
        <span
          v-for="(data, index) in infoData"
          :key="index"
          class="font-['Univers_Condensed'] leading-[22px] font-normal text-[#fff] text-base xl:text-lg"
          >{{ data.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";
const infoData = [
  {
    id: 1,
    content:
      "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
  },
  {
    id: 2,
    content:
      "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him",
  },
  {
    id: 3,
    content:
      "From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age. Out now on Playstation 4, Xbox One, PC, and Stadia.",
  },
];
const main = useMainNavStore();

const { sideBar } = storeToRefs(main);

const hideSideBar = () => {
  sideBar.value = !sideBar.value;
};
</script>

<style scoped>
*::selection {
  background-color: #cc0000;
}
</style>
