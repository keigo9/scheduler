import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Group from "../views/Group.vue";
import CreateGroup from "../views/CreateGroup.vue";
import GroupMember from "../views/GroupMember.vue";
import EditProfile from "../views/EditProfile.vue";

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
    path: "/group",
    name: "Group",
    component: Group
  },
  {
    path: "/creategroup",
    name: "CreateGroup",
    component: CreateGroup
  },
  {
    path: "/groupmember",
    name: "GroupMember",
    component: GroupMember
  },
  {
    path: "/editprofile",
    name: "EditProfile",
    component: EditProfile
  }
];

const router = new VueRouter({
  routes
});

export default router;
