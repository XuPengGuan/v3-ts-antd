<template>
  <a-tabs
    v-model:activeKey="tabsActiveKey"
    :animated="true"
    hide-add
    type="card"
    class="tabs-wrapper"
  >
    <a-tab-pane
      v-for="item of tabsList"
      :key="item.name"
      :closable="item.closable"
    >
      <template #tab>
        <a-dropdown :trigger="['contextmenu']">
          <div @contextmenu="handleContextmenu(item.name)">
            <SyncOutlined
              class="tab-refresh-wrapper"
              :spin="isRefresh"
              @click="refreshSelectedTag"
            />
            <span class="tab-name-wrapper">{{ item.name }}</span>
            <CloseOutlined
              class="tab-close-wrapper"
              @click.stop="handleTabsEdit(item.name)"
            />
          </div>
          <template #overlay>
            <TabViewBarExtra :contextMenuKey="contextMenuKey" />
          </template>
        </a-dropdown>
      </template>
    </a-tab-pane>
    <template #rightExtra>
      <a-dropdown placement="bottomRight">
        <DownOutlined class="py-10 px-20" />
        <template #overlay>
          <TabViewBarExtra />
        </template>
      </a-dropdown>
    </template>
  </a-tabs>
  <div class="content-wrapper">
    <div class="router-viewer" id="container">
      <router-view v-if="!isRefresh" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import router from "@/router";
import TabViewBarExtra from "./TabsViewBarExtra";

export default defineComponent({
  name: "tabsView",
  components: {
    TabViewBarExtra,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const tabsActiveKey = computed({
      get() {
        return store.state.menu.tabsActiveKey;
      },
      set(key) {
        router.push({ name: key });
      },
    });
    // 往tabsList推数据
    store.commit("menu/SET_PUSH_TABS_LIST", { name: route.name });
    // 更改tabsActiveKey的值
    store.commit("menu/SET_TABS_ACTIVE_KEY", route.name);
    const isRefresh = computed(() => store.state.menu.isRefresh);
    const tabsList = computed(() => store.state.menu.tabsList);
    // 删除tabsItem
    const handleTabsEdit = (targetKey) => {
      store.commit("menu/REMOVE_TABS_LIST_ITEM", targetKey);
    };
    let contextMenuKey = ref(undefined); // 右键选中的tabs
    const handleContextmenu = (targetKey) => {
      contextMenuKey.value = targetKey;
    };
    // 刷新
    const refreshSelectedTag = () => {
      store.dispatch("menu/setIsRefresh");
    };
    return {
      tabsActiveKey,
      tabsList,
      handleTabsEdit,
      contextMenuKey,
      handleContextmenu,
      isRefresh,
      refreshSelectedTag,
    };
  },
});
</script>

<style scoped lang="less">
.tabs-wrapper {
  .tab-refresh-wrapper,
  .tab-close-wrapper {
    font-size: 0;
    transition: 0.2s;
  }
  .tab-name-wrapper {
    margin-right: 8px;
  }
  .tab-close-wrapper {
    margin-right: 0 !important;
    &:hover {
      color: #752b2b;
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    .tab-refresh-wrapper,
    .tab-close-wrapper {
      font-size: 14px;
    }
  }
  .ant-tabs-tab:hover {
    .tab-close-wrapper {
      font-size: 14px;
    }
  }
  :deep(.ant-tabs-bar) {
    margin-bottom: 0;
  }
}
.content-wrapper {
  flex: 1;
  position: relative;
  background-color: #eee;
  .router-viewer {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 15px;
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden auto;
  }
}
</style>
