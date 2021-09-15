<template>
  <sub-menu :menuInfo="menuInfo" />
</template>

<script>
const SubMenu = {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <a-sub-menu :title="menuInfo.name" :key="menuInfo.name">
      <template v-for="item in menuInfo.children">
        <a-menu-item v-if="!item.children?.length" :key="item.name">
          <span>{{ item.name }}</span>
        </a-menu-item>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.name" />
        </template>
      </template>
    </a-sub-menu>
  `,
};
export default {
  name: "BaseSubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    "sub-menu": SubMenu,
  },
};
</script>

<style scoped></style>
