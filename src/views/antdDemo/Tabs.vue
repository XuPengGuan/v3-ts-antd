<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    <template #rightExtra>
      <a-dropdown placement="bottomRight">
        <a class="ant-dropdown-link" @click.prevent>
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </a-tabs>
</template>

<script>
export default {
  name: "TabsDemo",
};
</script>

<style scoped></style>
