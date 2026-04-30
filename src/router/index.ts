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
      path: "/projects",
      name: "projects",
      component: () => import("@/pages/ProjectsPage.vue"),
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
  scrollBehavior() {
    return { top: 0 };
  },
});
