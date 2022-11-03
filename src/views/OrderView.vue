<template>
  <div
    id="order"
    class="bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/b5c6c5b0cd5b97327e43face0125b9a1.jpg')] min-h-[120vh]"
  >
    <div class="select_edition flex justify-center">
      <div
        class="w-11/12 sm:w-[600px] lg:w-[700px] xl:w-[870px] 2xl:w-[44%] grid place-content-center lg:flex items-center lg:mt-10 lg:gap-1 xl:gap-0 lg:items-start xl:items-center"
      >
        <CardDefaultOrderPage
          :default-display="defaultDisplay"
          :edition="edition"
          :selected="selected"
        />
        <CardOrderPage
          :platform-data="platformData"
          :selected="selected"
          :edition="edition"
        />
        <div v-show="edition === '' && selected != ''" class="mt-10">
          <div v-for="(data, index) in platformData" :key="index">
            <div v-if="data.platform === selected">
              <div v-for="(dat, index) in data.image" :key="index">
                <figure v-if="dat[0] == 'UltimateEdition'">
                  <img
                    :src="dat[1]"
                    alt=""
                    class="max-h-[25em] mx-auto sm:mx-0 sm:max-h-[33em] lg:max-h-[50em] md:mx-auto xl:max-h-[70em]"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div
          class="xl:ml-7 mt-5 sm:mt-0 md:mt-5 sm:max-w-[420px] md:max-w-[480px] lg:w-full"
        >
          <p
            class="font-['RDR_Lino'] text-[22px] xl:text-[25px] font-normal text-white"
          >
            Select Edition:
          </p>
          <div
            class="edition sm:mx-auto grid gap-2 text-[#fff] font-['Serif_Demibold']"
          >
            <p
              v-for="(data, index) in editionData"
              @click="edition = data.name"
              :key="index"
              class="border cursor-pointer text-base rounded-md p-2"
            >
              {{ data.content }}
            </p>
          </div>
          <div class="platform grid gap-2">
            <p
              class="font-['RDR_Lino'] text-[22px] xl:text-[25px] mt-4 sm:mt-0 xl:mt-7 font-normal text-white"
            >
              Select Platform:
            </p>
            <select
              v-model="selected"
              class="bg-black cursor-pointer xl:mb-2 border rounded-md xl:w-full p-1.5 text-white"
            >
              <option value="" disabled selected hidden>PC Download</option>

              <option disabled hidden>PC Download</option>

              <option>PC Download</option>
              <option v-for="(data, index) in platformSelect" :key="index">
                {{ data.name }}
              </option>
            </select>
            <p
              class="bg-[url('/order_btn_background.png')] bg-[100%_100%] bg-no-repeat font-['RDR_Lino'] text-[1.5em] text-center font-medium xl:w-full xl:p-2 text-[#fff]"
            >
              buy now
            </p>
            <p
              v-if="
                edition === 'UltimateEdition' ||
                edition === 'StandardEdition' ||
                edition === ''
              "
              class="text-[#fff] text-center text-sm font-normal font-['Serif_Demibold']"
            >
              Red Dead Online is included with every edition of Red Dead
              Redemption 2.
            </p>
            <p
              v-if="edition === 'RedDeadOnline'"
              class="text-[#fff] text-center text-sm font-normal font-['Serif_Demibold']"
            >
              Introductory price offer expires on February 15, 2021 at 11:59pm.
              Red Dead Redemption 2: Story Mode sold separately. Internet
              connection required.
            </p>
          </div>
        </div>
      </div>
    </div>
    <DescriptionEditionOrder :edition="edition" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardDefaultOrderPage from "../components/CardDefaultOrderPage.vue";
import CardOrderPage from "../components/CardOrderPage.vue";
import DescriptionEditionOrder from "../components/DescriptionEditionOrder.vue";
import platformData from "../data/platformData";
const selected = ref("");
const edition = ref("");

const editionData = [
  {
    id: 1,
    name: "UltimateEdition",
    content: "Ultimate Edition",
  },
  {
    id: 2,
    name: "RedDeadOnline",
    content: "Red Dead Online",
  },
  {
    id: 3,
    name: "StandardEdition",
    content: "Standard Edition",
  },
];
const platformSelect = [
  { id: 1, name: "Playstation 4 - Pyshical" },
  { id: 2, name: "Playstation 4 - Digital" },
  { id: 3, name: "Xbox One - Pyshical" },
  { id: 4, name: "Xbox One - Digital" },
];

const defaultDisplay = platformData.filter((data) => data.id === 1);
</script>

<style scoped>
*::selection {
  background-color: red;
}

@media (max-width: 768px) {
  #hr::before {
    position: relative;
    display: block;
  }
  #hr::before {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    top: 210%;
    left: 0;
    bottom: 0;
    background: url("/hr_background.png");
    background-repeat: repeat-x;
    z-index: 1;
  }
}

@media (max-width: 1280px) {
  #hr::before {
    position: relative;
    display: block;
  }
  #hr::before {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    top: 210%;
    left: 0;
    bottom: 0;
    background: url("/hr_background.png");
    background-repeat: repeat-x;
    z-index: 1;
  }
}
</style>
