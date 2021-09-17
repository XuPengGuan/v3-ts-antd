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
            <SyncOutlined class="tab-refresh-wrapper" />
            <span class="tab-name-wrapper">{{ item.name }}</span>
            <CloseOutlined
              v-if="item.name !== defineHomeText"
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
    <template #tabBarExtraContent>
      <div class="tabs-view-bar-extra-wrapper">
        <a-dropdown :trigger="['hover']">
          <DownOutlined />
          <template #overlay>
            <TabViewBarExtra />
          </template>
        </a-dropdown>
      </div>
    </template>
  </a-tabs>
  <div class="content-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <keep-alive>
          <component class="native_router-view-wrapper" :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import router from "@/router";
import TabViewBarExtra from "./TabsViewBarExtra";
import { defineHomeText } from "@/utils/enum";

export default defineComponent({
  name: "tabsView",
  components: {
    TabViewBarExtra,
  },
  setup() {
    const route = useRoute();

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

    const tabsList = computed(() => store.state.menu.tabsList);
    // 删除tabsItem
    const handleTabsEdit = (targetKey) => {
      store.commit("menu/REMOVE_TABS_LIST_ITEM", targetKey);
    };
    let contextMenuKey = ref(undefined); // 右键选中的tabs
    const handleContextmenu = (targetKey) => {
      contextMenuKey.value = targetKey;
    };
    return {
      tabsActiveKey,
      tabsList,
      handleTabsEdit,
      defineHomeText,
      contextMenuKey,
      handleContextmenu,
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
  /deep/.ant-tabs-bar {
    margin-bottom: 0;
  }
  .tabs-view-bar-extra-wrapper {
    margin-right: 20px;
  }
}
.content-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden auto;
  background-color: #eee;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 5px;
  }
  .native_router-view-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 15px;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
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
