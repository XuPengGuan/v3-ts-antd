<template>
  <div>
    <div class="text-red-700 my-30" title="这是title提示">{{ count }}</div>
    <button @click="count++">增加count</button>
    <div>{{ props }}</div>
    <div>{{ emits }}</div>
    <div>789</div>
    <SubCom
      ref="SubComDom"
      name="张三"
      :count="count"
      @changeName="changeName"
    />
  </div>
</template>

<script lang="ts" setup>
import SubCom from "./SubCom";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
const count: Ref<number> = ref(78119);

const props = withDefaults(
  defineProps<{
    foo?: string;
  }>(),
  {
    foo: "默认foo112222",
  }
);
const emits = defineEmits(["change"]);
const changeName = (value) => {
  // console.log("子组件传值", value);
  alert("子组件来值：" + value);
};
const SubComDom = ref(null);
onMounted(() => {
  console.log(SubComDom.value, "SubComDom");
});
</script>

<style scoped></style>
