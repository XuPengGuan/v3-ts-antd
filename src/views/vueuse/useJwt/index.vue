<template>
  <div>
    <div>{{ formatted }}</div>
    <img :src="qrCode" alt="" />
    <div>
      {{ Jwt }}
    </div>
    <div
      v-for="(item, index) of 4"
      :key="item"
      :ref="
        (el) => {
          if (el) divs[index] = el;
        }
      "
    >
      123
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useNow, useDateFormat } from "@vueuse/core";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { useJwt } from "@vueuse/integrations/useJwt";

export default defineComponent({
  setup(props, ctx) {
    console.log(ctx);
    const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
    const qrCode = useQRCode("您的银行卡密码已被窃取");
    const encodedJwt = ref(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc"
    );
    const Jwt = useJwt(encodedJwt);
    const divs = ref([]);
    onMounted(() => {
      console.log(divs, "divItem");
    });
    return {
      formatted,
      qrCode,
      Jwt,
      divs,
    };
  },
});
</script>

<style scoped></style>
