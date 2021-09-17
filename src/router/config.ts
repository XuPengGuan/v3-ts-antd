import { RouteRecordRaw } from "vue-router";
import { defineHomeText } from "@/utils/enum";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: defineHomeText,
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/authMange",
        name: "权限管理",
        component: () => import("@/views/authMange/index.vue"),
      },
      {
        path: "/demo",
        name: "demo演示",
        component: () => import("@/views/index.vue"),
        children: [
          {
            path: "custom-modal",
            name: "自定义弹框",
            component: () => import("@/views/demo/modules/customModal.vue"),
            children: [
              {
                path: "test2",
                name: "测试",
                component: () => import("@/views/demo/modules/customModal.vue"),
              },
            ],
          },
          {
            path: "custom-modal2",
            name: "自定义弹框2",
            component: () => import("@/views/demo/modules/customModal.vue"),
          },
        ],
      },
      {
        path: "/antdDemo",
        name: "antdDemo",
        component: () => import("@/views/index.vue"),
        children: [
          {
            path: "form",
            name: "form案例",
            component: () => import("@/views/antdDemo/form.vue"),
          },
          {
            path: "ref",
            name: "获取ref",
            component: () => import("@/views/antdDemo/ref.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/error/404.vue"),
  },
];
export default routes;
