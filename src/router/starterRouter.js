import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "../layout/starter/SampleLayout.vue";
import Starter from "../layout/starter/Dashboard.vue";
import Weather from "../layout/starter/Weather.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import ExoProfile from "../layout/starter/ExoProfile.vue";
import Casptone from "../layout/starter/CapstoneProject.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          components: { default: Starter }
        },
        {
          path: "about",
          name: "about",
          component: ExoProfile
        },
        {
          path: "weather",
          name: "weather",
          component: Weather
        },
        {
          path: "project",
          name: "project",
          component: Casptone
        }
      ]
    },
    { path: "*", component: NotFound }
  ]
});
