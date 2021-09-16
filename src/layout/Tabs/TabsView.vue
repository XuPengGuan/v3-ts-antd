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
        <SyncOutlined class="tab-refresh-wrapper" />
        <span class="tab-name-wrapper">{{ item.name }}</span>
        <CloseOutlined
          v-if="item.name !== defineHomeText"
          class="tab-close-wrapper"
          @click.stop="handleTabsEdit(item.name)"
        />
      </template>
    </a-tab-pane>
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
import { defineComponent, computed } from "vue";
import store from "@/store";
import router from "@/router";
import { defineHomeText } from "@/utils/enum";

export default defineComponent({
  name: "tab-view",
  setup() {
    const tabsActiveKey = computed({
      get() {
        return store.state.menu.tabsActiveKey;
      },
      set(key) {
        router.push({ name: key });
      },
    });

    const tabsList = computed(() => store.state.menu.tabsList);
    // 删除tabsItem
    const handleTabsEdit = (targetKey) => {
      store.commit("menu/REMOVE_TABS_LIST_ITEM", targetKey);
    };

    return {
      tabsActiveKey,
      tabsList,
      handleTabsEdit,
      defineHomeText,
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
}
.content-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden auto;
  .native_router-view-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 10px;
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
