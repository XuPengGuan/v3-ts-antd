import router from "./router";
import routes from "@/router/config";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getCookie } from "@/utils/cookies";
import { defineLayoutText } from "@/utils/enum";
import { unfoldMenuArr, IMenusOfChildren } from "@/utils/utils";

const whiteList = ["/login"];

router.beforeEach((to, form, done) => {
  NProgress.start();
  if (getCookie()) {
    done();
    NProgress.done();
  } else {
    if (whiteList.includes(to.path)) {
      done();
      NProgress.done();
    } else {
      done(`/login?redirect=${to.fullPath}`);
    }
  }
});

router.afterEach((to) => {
  document.title = (to.name as string) || document.title;
  // 检测是否为安全路由(Layout之下的路由)，true才会进行更改tabs数据
  const menus = (
    routes.find((item) => item.name === defineLayoutText) as IMenusOfChildren
  ).children;
  const safeMenus = unfoldMenuArr(menus, []);
  const isSafeMenu = safeMenus.some((item) => {
    return item.name === to.name;
  });
  if (isSafeMenu) {
    // 往tabsList推数据
    store.commit("menu/SET_PUSH_TABS_LIST", { name: to.name });
    // 更改tabsActiveKey的值
    store.commit("menu/SET_TABS_ACTIVE_KEY", to.name);
  }
});
