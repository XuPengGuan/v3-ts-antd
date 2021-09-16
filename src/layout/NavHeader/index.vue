<template>
  <header class="header-wrapper">
    <div class="left-options">
      <ExportOutlined class="icon-wrapper" />
      <SyncOutlined class="icon-wrapper" />
    </div>
    <div class="right-options">
      <ExportOutlined class="icon-wrapper" />
      <ExportOutlined class="icon-wrapper" />
      <ExportOutlined class="icon-wrapper" />
      <ExportOutlined class="icon-wrapper" />
      <a-dropdown>
        <span class="system-wrapper">系统管理</span>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <span>修改密码</span>
            </a-menu-item>
            <a-menu-item>
              <span @click="handleLogout">退出登录</span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  name: "NavHeader",
  setup() {
    const handleLogout = () => {
      store.dispatch("user/logout");
    };
    return {
      handleLogout,
    };
  },
});
</script>

<style scoped lang="less">
.header-wrapper {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 5px 5px #eee;
  .left-options,
  .right-options {
    .icon-wrapper {
      cursor: pointer;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
  .system-wrapper {
    cursor: pointer;
  }
}
</style>
