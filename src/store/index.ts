import { createStore } from "vuex";

const files = require.context("./modules", false, /\.ts$/);
interface Modules {
  [propName: string]: any;
}
const modules: Modules = {};
files.keys().forEach((key: string) => {
  modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key).default;
});
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules,
});
