<template>
  <sub-menu :menuInfo="menuInfo" />
</template>

<script>
import { defineComponent } from "vue";

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
      <template #icon>
        <component :is="menuInfo.meta?.icon" />
      </template>
      <template v-for="item in menuInfo.children">
        <template v-if="!item.children?.length">
          <a-menu-item :key="item.name">
            <component :is="item.meta?.icon" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.name" />
        </template>
      </template>
    </a-sub-menu>
  `,
};

export default defineComponent({
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
});
</script>

<style scoped></style>
