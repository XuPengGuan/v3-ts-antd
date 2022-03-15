<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "index",
  setup() {
    const a = useRouter();
    console.log(a, "a");
  },
});
</script>

<style scoped></style>
