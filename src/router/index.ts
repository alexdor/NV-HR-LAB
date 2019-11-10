/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/OB",
    name: "Opsigelses Beregner",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ob" */ "../views/OB.vue")
  },
  {
    path: "/sickdays",
    name: "Sick Days",
    component: () =>
      import(
        /* webpackChunkName: "sick-days" */ "../views/SickdayCalculator.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
