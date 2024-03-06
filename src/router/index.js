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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/jobs/JobsView.vue"),
    },
    {
      path: "/jobs/:id",
      name: "JobDetails",
      component: () => import("../views/jobs/JobDetails.vue"),
      props: true,
    },
    // Redirect
    {
      path: "/all-jobs",
      redirect: "/jobs",
    },
    // Catch all Routes 404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
