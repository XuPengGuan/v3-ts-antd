<template>
  <a-menu
    class="menu-wrapper"
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="clickMenuItem"
  >
    <template v-for="item of menus">
      <a-menu-item v-if="!item.children?.length" :key="item.name">
        <span>{{ item.name }}</span>
      </a-menu-item>
      <template v-else>
        <base-sub-menu :key="item.name" :menuInfo="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
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
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [route.name],
    });
    const clickMenuItem = ({ key }) => {
      router.push({ name: key });
    };
    return {
      ...toRefs(state),
      menus,
      clickMenuItem,
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
