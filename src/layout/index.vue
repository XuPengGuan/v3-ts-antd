<template>
  <div class="layout-wrapper">
    <nav-aside class="native_aside-wrapper" />
    <div class="main-wrapper">
      <nav-header class="native_header-wrapper" />
      <tab-view />
      <div class="content-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <keep-alive>
              <component class="native_router-view-wrapper" :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "./NavHeader";
import TabView from "./Tabs/tab-view";
import NavAside from "./NavAside";
export default {
  name: "index",
  components: {
    NavHeader,
    NavAside,
    TabView,
  },
};
</script>

<style scoped lang="less">
.layout-wrapper {
  display: flex;
  height: 100%;
  overflow: hidden;
  .main-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    .content-wrapper {
      flex: 1;
      position: relative;
      overflow: hidden auto;
      .native_router-view-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: 10px;
      }
    }
  }
  /* 可以设置不同的进入和离开动画   */
  /* 设置持续时间和动画函数        */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
