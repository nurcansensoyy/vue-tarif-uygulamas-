import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tarif/:slug",
      name: "Tarif",
      component: () => import("../views/Recipe.vue"),
    },
  ],
});

export default router;
