<template>
  <div style="height: 1000px">
    <div>首132页内容</div>
    <a-button type="primary" @click="openDialog">弹框</a-button>
    <iframe
      id="iframe"
      width="1500px"
      height="700px"
      src="http://localhost:9010/#/sourceOfDanger?showMenu=false"
    ></iframe>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  name: "homeIndex",
  // mounted() {
  //   window.onload = () => {
  //     let iframe = document.getElementById("iframe");
  //     console.log(iframe, "iframe");
  //     iframe.contentWindow.postMessage(
  //       "主页面消息",
  //       "http://localhost:9010/#/sourceOfDanger"
  //     );
  //   };
  // },
  setup() {
    const $dialog =
      getCurrentInstance().appContext.config.globalProperties.$dialog;
    function openDialog() {
      $dialog();
    }
    return {
      openDialog,
    };
  },
});
</script>

<style scoped></style>
