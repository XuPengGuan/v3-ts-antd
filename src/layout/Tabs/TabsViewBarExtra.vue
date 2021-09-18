<template>
  <a-menu>
    <a-menu-item
      key="1"
      :disabled="contextMenuKey && contextMenuKey !== tabsActiveKey"
      @click="refreshSelectedTag"
    >
      <SyncOutlined />
      刷新
    </a-menu-item>
    <a-menu-item
      key="2"
      :disabled="
        contextMenuKey === defineHomeText ||
        (!contextMenuKey && tabsActiveKey === defineHomeText)
      "
      @click="handleTabsEdit"
    >
      <CloseOutlined />
      关闭
    </a-menu-item>
    <a-menu-divider />
    <a-menu-item key="3"> <VerticalRightOutlined />关闭左侧</a-menu-item>
    <a-menu-item key="4"> <VerticalLeftOutlined />关闭右侧</a-menu-item>
    <a-menu-divider />
    <a-menu-item key="5"> <CloseOutlined />关闭其他</a-menu-item>
    <a-menu-item key="6"> <CloseOutlined />关闭全部</a-menu-item>
  </a-menu>
</template>

<script>
import { computed, defineComponent, unref } from "vue";
import store from "@/store";
import router from "@/router";
import { useRoute } from "vue-router";
import { defineHomeText, defineRedirectPath } from "@/utils/enum";

export default defineComponent({
  name: "TabViewBarExtra",
  props: {
    contextMenuKey: String,
  },
  setup(props) {
    const route = useRoute();

    const tabsActiveKey = computed(() => store.state.menu.tabsActiveKey);
    const refreshSelectedTag = () => {
      router.replace({
        path: defineRedirectPath + unref(route).fullPath,
      });
    };
    // 关闭当前
    const handleTabsEdit = () => {
      if (props.contextMenuKey) {
        store.commit("menu/REMOVE_TABS_LIST_ITEM", props.contextMenuKey);
      } else {
        store.commit("menu/REMOVE_TABS_LIST_ITEM", tabsActiveKey.value);
      }
    };
    return {
      refreshSelectedTag,
      handleTabsEdit,
      tabsActiveKey,
      defineHomeText,
    };
  },
});
</script>

<style scoped lang="less"></style>
