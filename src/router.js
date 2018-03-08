import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass : 'current',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/users",
      name: "users",
      component: () => import('./views/Users.vue')
    },
    {
      path: "/users/add",
      name: "add-user",
      component: () => import('./views/AddUser.vue')
    },
    {
      path: "/users/:id/edit",
      name: "edit-user",
      component: () => import('./views/EditUser.vue')
    }
  ]
});
