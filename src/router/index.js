import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Member from "../views/Member.vue";
import CreateGroup from "../views/CreateGroup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/member",
    name: "Member",
    component: Member
  },
  {
    path: "/creategroup",
    name: "CreateGroup",
    component: CreateGroup
  }
];

const router = new VueRouter({
  routes
});

export default router;
