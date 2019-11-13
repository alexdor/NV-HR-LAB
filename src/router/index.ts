/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/om-hr-lab",
    name: "Om HR Lab",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/OB",
    name: "Opsigelses Beregner",
    component: () => import(/* webpackChunkName: "ob" */ "../views/OB.vue")
  },
  {
    path: "/sickdays",
    name: "Sick Days",
    component: () =>
      import(
        /* webpackChunkName: "sick-days" */ "../views/SickdayCalculator.vue"
      )
  },
  {
    path: "/terminations",
    name: "Terminations",
    component: () =>
      import(/* webpackChunkName: "terminations" */ "../views/Terminations.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
