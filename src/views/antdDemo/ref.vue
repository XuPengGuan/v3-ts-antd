<template>
  <div ref="box">
    I am div
    <div ref="content">content</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "ref",
  setup() {
    let box1 = ref(null);
    let content = ref(null);
    console.log(box1.value);
    console.log(content.value);

    // 由于 template 中的 div 属性 ref 引用了一个对象 box，因此 box 将与这个 div 执行绑定。
    // 但由于 setup 执行时期，还未创建实际的 div，所以如果要进行与 box 的交互，必须在生命周期中间执行获取。
    // onMounted() 中的行为会在声明周期 mounted 中执行。
    onMounted(() => {
      console.log("box.value", box1.value);
      console.log("content.value", content);
    });

    return { box1 };
  },
};
</script>
