import { defineStore } from "pinia";

export const useMainNavStore = defineStore("main", {
  state: () => ({ sideBar: false }),
});
