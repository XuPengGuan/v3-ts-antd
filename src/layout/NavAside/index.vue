<template>
  <aside class="aside-wrapper">
    <logo />
    <base-menu class="native_base-menu-wrapper" />
  </aside>
</template>

<script lang="ts">
import Logo from "./Logo.vue";
import BaseMenu from "./BaseMenu.vue";
export default {
  name: "index",
  components: {
    Logo,
    BaseMenu,
  },
};
</script>

<style scoped lang="less">
.aside-wrapper {
  width: 256px;
  display: flex;
  flex-direction: column;
  background-color: #022140;
  .native_base-menu-wrapper {
    flex: 1;
  }
}
</style>
