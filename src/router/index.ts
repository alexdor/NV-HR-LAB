/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.json";

Vue.use(VueRouter);

interface Route {
  prerender?: boolean;
  path: string;
  name: string;
  view: string;
}

const router = new VueRouter({
  mode: "history",
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  },
  routes: routes.map((route: Route) => ({
    ...route,
    component: () => import(`../views/${route.view}`)
  }))
});

export default router;
