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
  {
    path: "/info",
    name: "info",
    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
