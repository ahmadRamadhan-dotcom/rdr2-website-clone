<template>
  <div
    :class="{ 'sepia-[.75] blur-[2px]': sideBar }"
    class="bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/features/gang/7ea7dc0fb3e78ce6a5e9c27b694ee07b.jpg')] grid place-content-center"
  >
    <div
      class="mt-10 grid gap-3 items-center w-10/12 sm:w-[550px] md:w-11/12 mx-auto xl:p-[200px_200px] text-center"
    >
      <span
        class="text-[#fff] uppercase font-normal font-['Redemption'] text-[44px] xl:text-[50px]"
        >Weaponry
      </span>
      <p
        class="text-lg sm:text-base font-['UniversCondensed'] font-normal text-[#fff]"
      >
        Detail, depth and choice define every aspect of Red Dead Redemption 2,
        and weapons are no exception.
      </p>
      <p
        class="text-base xl:text-lg font-['UniversCondensed'] font-normal text-[#fff]"
      >
        There are over 50 unique usable weapons, a massive range of options for
        customization, and a wide selection of different ammunition types to
        improve accuracy, range or damage. The more a gun is used, the better it
        will perform, but it will also start to degrade over time if not looked
        after, so a trusty sidearm needs to be kept oiled and clean.
      </p>
      <div class="chevron mx-auto"></div>
    </div>
    <div
      class="mt-10 flex flex-col mx-auto justify-center w-11/12 sm:w-[97%] sm:grid xl:w-[99%]"
    >
      <img
        v-for="(data, index) in weaponData"
        :key="index"
        :src="data.image"
        alt=""
      />
    </div>
    <div class="flex justify-center mt-14 xl:mt-14">
      <div
        class="grid gap-3 place-content-center text-center w-9/12 sm:w-10/12 xl:w-[1000px]"
      >
        <span
          class="font-['Redemption'] text-[#fff] font-normal text-[44px] xl:text-[50px]"
        >
          Weapon Choice & Customization
        </span>
        <p
          class="font-['UniversCondesed'] font-normal text-[#ffff] text-base xl:text-lg"
        >
          With a myriad of customization options ranging from visual upgrades
          like new metals, woods, varnishes and engravings to performance
          upgrades like new barrels, grips, sights and scopes, you can design an
          entirely unique weapon that looks and handles exactly the way you want
          it to. Every weapon’s performance varies in terms of damage, range,
          fire rate, accuracy and reload speed so it’s important to pick wisely
          depending on the situation.
        </p>
        <p
          class="font-['UniversCondesed'] font-normal text-[#ffff] text-base xl:text-lg"
        >
          The high fire rate of a Double-Action Revolver lends itself well to
          shooting on the move from horseback. If you’re carrying something in
          one hand, like a lantern or small animal, consider using a Sawed-Off
          Shotgun which packs a much bigger punch at close range than other
          one-handed weapons. The Varmint Rifle is perfect for hunting small
          game because it’s far less likely to damage the quality of the skin
          and meat than a firearm with a bigger shell size.
        </p>
        <p
          class="font-['UniversCondesed'] font-normal text-[#ffff] text-base xl:text-lg"
        >
          When faced with just one or two enemies, you might want to go for a
          Springfield Rifle which has a slower fire rate but delivers much
          higher damage. For range, a sniper rifle of some kind is obviously a
          good choice, but scopes can also be fitted to all other types of rifle
          enabling you to switch between regular view and scope view at any
          time.
        </p>
      </div>
    </div>
    <div class="text-center flex justify-center mt-10">
      <div class="w-11/12 sm:w-[97%] xl:w-[96%] flex flex-wrap gap-3">
        <CardWeapon :weapon-ry-data="weaponChoiceData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import weaponData from "../data/weaponData";
import weaponChoiceData from "../data/weaponChoiceData";
import CardWeapon from "../components/CardWeapon.vue";
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";

const main = useMainNavStore();
const { sideBar } = storeToRefs(main);
</script>

<style scoped>
*::selection {
  background-color: red;
}

.chevron {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: content-box;
  background-image: url("/chevron.svg");
}
</style>
