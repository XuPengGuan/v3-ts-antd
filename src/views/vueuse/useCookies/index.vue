<template>
  <div>
    <strong>locale</strong>: {{ cookies.get("locale") }}
    <hr />
    <pre>{{ cookies.getAll() }}</pre>
    <button @click="cookies.set('locale', 'ru-RU')">Russian</button>
    <button @click="cookies.set('locale', 'en-US')">English</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";

export default defineComponent({
  setup() {
    const cookies = useCookies(["locale"]);
    return {
      cookies,
    };
  },
});
</script>

<style scoped></style>
