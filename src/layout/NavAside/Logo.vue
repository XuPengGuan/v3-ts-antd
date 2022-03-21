<template>
  <div class="logo">
    <img src="~@/assets/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">xxx管理系统</h2>
  </div>
</template>

<script setup>
defineProps({
  collapsed: {
    type: Boolean,
  },
});
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  white-space: nowrap;
  align-items: center;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    margin-bottom: 0;
    color: white;
  }
}
</style>
