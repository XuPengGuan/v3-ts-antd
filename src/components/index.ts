import dialog from "./dialog/index";
export default {
  // eslint-disable-next-line
  install(app: any) {
    app.use(dialog);
  },
};
