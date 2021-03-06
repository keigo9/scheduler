import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Calender from "../views/Calender.vue";
import Group from "../views/Group.vue";
import GroupMember from "../views/GroupMember.vue";
import EditProfile from "../views/EditProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/createaccount",
    name: "CreateAccount",
    component: CreateAccount
  },
  {
    path: "/calender/:teamName",
    name: "Calender",
    component: Calender,
    props: true
  },
  {
    path: "/group",
    name: "Group",
    component: Group
  },
  {
    path: "/groupmember/:teamName",
    name: "GroupMember",
    component: GroupMember,
    props: true
  },
  {
    path: "/editprofile",
    name: "EditProfile",
    component: EditProfile
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
