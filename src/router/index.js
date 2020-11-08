import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue";
import Comments from "../views/Comments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorite
  },
  {
    path: "/comments",
    name: "Comments",
    component: Comments
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
