<template>
  <div>
    <div v-for="item of 100" :key="item">{{ item }}{{ x }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "authMange",
  setup() {
    return {
      x:
        "Three.js 是一个基于 WebGL 的 js 开源框架，由 Ricardo Cabello 在 2010 四月于 GitHub 首次发布，目前在 GitHub 上 star 数量已经达到了 76.8k。\n" +
        "Threejs 对 WebGL 进行了封装，让前端开发人员在不需要掌握很多数学知识和绘图知识的情况下，也能够轻松进行 web 3D 开发，降低了门槛，同时大大提升了效率。\n" +
        "\n" +
        "你甚至不必懂计算机图形学，只要理解了 Three.js 的一些基本概念就可以从 0 到 1 入手酷炫的 3D 开发！\n" +
        "\n" +
        "Three.js 作者 Ricardo Cabello 也是一位极具传奇性的程序员——早年间做过设计师，通过业余时间自学成才走上图形编程道路，同时贡献了包括基于 WebGL 的 3D 引擎 Three.js、js 性能监控工具 Stats.js、纹理生成工具 Texgen.js 等在内的优秀开源框架，其中 Three.js 俨然已成为当下前端搭建 3D 项目/可视化的首选方案。\n" +
        "本期稀土掘金&字节跳动 Web Infra 发起的 「大咖面对面」，有幸邀请到 Three.js 作者 Ricardo Cabello 和我们来一场线上的访谈，畅聊 Three.js 框架背后趣事、开源框架如何建设，以及前端开发们关注的各类经典话题，大家可以抢占前排，强势围观！\n" +
        "请大家提前扫码，回复 掘金活动 入群交流 👇\n" +
        "\n" +
        "作者：字节跳动技术团队\n" +
        "链接：https://juejin.cn/post/7041770739300565000\n" +
        "来源：稀土掘金\n" +
        "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。",
    };
  },
});
</script>

<style scoped></style>
