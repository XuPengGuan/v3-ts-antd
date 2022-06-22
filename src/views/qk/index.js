import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "vue-project",
    entry: "http://localhost:9011/",
    container: "#container",
    activeRule: "/qk/vue-project",
  },
]);
console.log("start-------------");

start();
