import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/components/Home.vue";
import TodoList from "@/components/TodoList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "TodoList",
    component: TodoList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
