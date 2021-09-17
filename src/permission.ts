import router from "./router";
import store from "./store";
import { getCookie } from "@/utils/cookies";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

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
  // 往tabsList推数据
  store.commit("menu/SET_PUSH_TABS_LIST", { name: to.name });
  // 更改tabsActiveKey的值
  store.commit("menu/SET_TABS_ACTIVE_KEY", to.name);
});
