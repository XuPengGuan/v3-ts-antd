<template>
  <div><a-button @click="openDialog">打开弹框</a-button></div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import ModalForm from "./components/ModalForm";
export default defineComponent({
  name: "customModal",
  setup() {
    const globalProperties =
      getCurrentInstance().appContext.config.globalProperties;

    function openDialog() {
      console.log(globalProperties.$dialog);
      globalProperties.$dialog(
        ModalForm,
        {
          props: { x: 123 },
          on: {},
        },
        { title: "自定义弹框" }
      );
    }
    return {
      openDialog,
    };
  },
});
</script>

<style scoped></style>
