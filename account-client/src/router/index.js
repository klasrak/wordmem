import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Auth from "../views/Auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/authenticate",
    name: "Auth",
    component: Auth
    // component: () =>
    //   import(/* webpackChunkName: "auth" */ "../components/Auth.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
