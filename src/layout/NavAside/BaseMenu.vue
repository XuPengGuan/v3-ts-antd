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
import { computed, defineComponent, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import store from "@/store";
import routes from "@/router/config";
import BaseSubMenu from "@/layout/NavAside/BaseSubMenu";

export default defineComponent({
  name: "BaseMenu",
  components: {
    BaseSubMenu,
  },
  setup() {
    // 当前路由
    const router = useRouter();
    const route = useRoute();

    // 路由菜单
    const menus = routes.find((item) => item.name === "Layout").children;
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
    watch(
      () => route.fullPath,
      () => {
        // 往tabsList推数据
        store.commit("menu/SET_PUSH_TABS_LIST", { name: route.name });
        // 更改tabsActiveKey的值
        store.commit("menu/SET_TABS_ACTIVE_KEY", route.name);
      }
    );
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
