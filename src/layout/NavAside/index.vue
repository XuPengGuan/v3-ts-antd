<template>
  <aside
    class="aside-wrapper transition-all flex flex-col bg-[#022140]"
    :class="collapsed ? 'w-80' : 'w-256'"
  >
    <logo :collapsed="collapsed" />
    <base-menu class="flex-1" />
  </aside>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Logo from "./Logo.vue";
import BaseMenu from "./BaseMenu.vue";
const store = useStore();
const collapsed = computed(() => store.state.menu.collapsed);
</script>
