<template>
  <div class="layout-wrapper">
    <nav-aside class="native_aside-wrapper" />
    <div class="main-wrapper">
      <nav-header class="native_header-wrapper" />
      <tabs-view />
    </div>
  </div>
</template>

<script>
import NavHeader from "./NavHeader";
import TabsView from "./Tabs/TabsView";
import NavAside from "./NavAside";
export default {
  name: "layout",
  components: {
    NavHeader,
    NavAside,
    TabsView,
  },
};
</script>

<style scoped lang="less">
.layout-wrapper {
  display: flex;
  height: 100%;
  overflow: hidden;
  .main-wrapper {
    width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
