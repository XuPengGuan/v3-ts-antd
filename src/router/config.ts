import { RouteRecordRaw } from "vue-router";
import { defineHomeText, defineLayoutText } from "@/utils/enum";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: defineLayoutText,
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: defineHomeText,
        component: () => import("@/views/home/index.vue"),
        meta: {
          icon: "HomeOutlined",
        },
      },
      {
        path: "/authMange",
        name: "权限管理",
        component: () => import("@/views/authMange/index.vue"),
        meta: {
          icon: "ExportOutlined",
        },
      },
      {
        path: "/demo",
        name: "demo演示",
        component: () => import("@/views/index.vue"),
        meta: {
          icon: "ExportOutlined",
        },
        children: [
          {
            path: "custom-modal",
            name: "自定义弹框",
            component: () => import("@/views/index.vue"),
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
        meta: {
          icon: "ExportOutlined",
        },
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
          {
            path: "tabs",
            name: "tabs测试",
            component: () => import("@/views/antdDemo/Tabs.vue"),
          },
        ],
      },
      {
        path: "/vueuse",
        name: "vueuse",
        component: () => import("@/views/index.vue"),
        meta: {
          icon: "ExportOutlined",
        },
        children: [
          {
            path: "useJwt",
            name: "useJwt",
            component: () => import("@/views/vueuse/useJwt/index.vue"),
          },
          {
            path: "useCookies",
            name: "useCookies",
            component: () => import("@/views/vueuse/useCookies/index.vue"),
          },
          {
            path: "setupTest",
            name: "setupTest",
            component: () => import("@/views/vueuse/setupTest/index.vue"),
          },
        ],
      },
      {
        path: "/qk",
        name: "qk",
        meta: {
          icon: "ExportOutlined",
        },
        component: () => import("@/views/index.vue"),
        children: [
          {
            path: "vue-project",
            name: "vue-project",
            component: () => import("@/views/qk/vue-project.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/error/404.vue"),
  },
];
export default routes;
