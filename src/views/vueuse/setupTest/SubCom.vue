<template>
  <div>
    <div class="text">子组件</div>
    <div>接受的值有{{ count }}</div>
    <button @click="clickFn">向父组件传值</button>
  </div>
</template>

<script lang="ts" setup>
interface Person {
  name: string;
  age: number;
}
import { ref, watchPostEffect } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  name: String,
  count: Number,
});
const emits = defineEmits(["changeName"]);
const clickFn = () => {
  emits("changeName", props.count);
};
// const textColor: Ref<string> = ref("rgb(255,0,0)");
const partial: Ref<Person> = ref({
  y: 789,
  x: "123",
});
console.log(partial, "partial");
watchPostEffect(
  () => {
    console.log(props.count, "watchEffect count");
    console.log(props.name, "watchEffect name");
  },
  {
    flush: "post",
    onTrack(e) {
      console.log(e, "e");
    },
  }
);
</script>

<style scoped lang="less">
.text {
  //color: v-bind(textColor);
}
</style>
