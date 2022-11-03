import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/OrderView.vue"),
  },
  {
    path: "/weaponry",
    name: "weaponry",
    component: () => import("../views/WeaponRyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
