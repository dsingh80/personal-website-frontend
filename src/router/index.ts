import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: () => import("@/pages/ProjectDetailPage.vue"),
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/pages/ResumePage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/pages/ContactPage.vue"),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});
