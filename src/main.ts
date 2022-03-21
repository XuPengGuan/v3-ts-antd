import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);
import antdV from "@/core";
import components from "./components";

// console.log(components, "components, components");
import "./permission.ts";
app.use(router).use(store).use(antdV).use(components).mount("#app");
