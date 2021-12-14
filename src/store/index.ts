import { createStore, StoreOptions } from "vuex";
import { IStore } from "@/store/type";

const files = require.context("./modules", false, /\.ts$/);
interface Modules {
  [propName: string]: StoreOptions<IStore>;
}
const modules: Modules = {};
files.keys().forEach((key: string) => {
  modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key).default;
});
export default createStore({
  modules,
});
