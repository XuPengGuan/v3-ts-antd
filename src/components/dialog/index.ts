// import { IUnknownObj } from "@/utils/utils";

/*function dialog(
  components: IUnknownObj,
  DOMProperty: IUnknownObj,
  modalProps: IUnknownObj
): void {
  console.log(components);
  console.log(DOMProperty);
  console.log(modalProps);
}*/

// eslint-disable-next-line
export default (Vue: any) => {
  // console.log(Vue, "vue123");
  function dialog() {
    console.log("open");
  }
  new Proxy(Vue.config.globalProperties, {
    get: () => {
      // console.log("get");
      dialog();
    },
  });
};

/*export default {
  // eslint-disable-next-line
  install(app: any) {
    console.log(app, "appppp");
  },
};*/
