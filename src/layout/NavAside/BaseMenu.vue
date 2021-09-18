<template>
  <a-menu
    class="menu-wrapper"
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <template v-for="item of menus">
      <a-menu-item v-if="!item.children?.length" :key="item.name">
        <component :is="item.meta?.icon" />
        <span>{{ item.name }}</span>
      </a-menu-item>
      <template v-else>
        <base-sub-menu :key="item.name" :menuInfo="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import router from "@/router";
import routes from "@/router/config";
import BaseSubMenu from "@/layout/NavAside/BaseSubMenu";
import { defineLayoutText } from "@/utils/enum";

export default defineComponent({
  name: "BaseMenu",
  components: {
    BaseSubMenu,
  },
  setup() {
    const route = useRoute();
    // 路由菜单
    const menus = routes.find(
      (item) => item.name === defineLayoutText
    ).children;
    // 获取当前打开的节点
    const getOpenKeys = () =>
      route.matched.reduce((arr, item) => [...arr, item.name], []);
    const openKeys = ref(getOpenKeys());
    const selectedKeys = computed({
      get() {
        return [store.state.menu.tabsActiveKey];
      },
      set([key]) {
        router.push({ name: key });
      },
    });
    return {
      menus,
      openKeys,
      selectedKeys,
    };
  },
});
</script>

<style scoped lang="less">
.menu-wrapper {
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
