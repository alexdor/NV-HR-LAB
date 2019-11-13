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
    path: "/opsigelseberegner",
    name: "Opsigelses Beregner",
    component: () => import(/* webpackChunkName: "ob" */ "../views/OB.vue")
  },
  {
    path: "/sygedagsberegner",
    name: "Sygedagsberegner",
    component: () =>
      import(
        /* webpackChunkName: "sick-days" */ "../views/SickdayCalculator.vue"
      )
  },
  {
    path: "/opsigelser",
    name: "Opsigelser",
    component: () =>
      import(/* webpackChunkName: "terminations" */ "../views/Terminations.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
