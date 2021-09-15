import router from "./router";
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
