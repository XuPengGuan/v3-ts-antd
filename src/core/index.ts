import { Button, Input, Menu, Form, Select, Result } from "ant-design-vue";
import {
  RedditOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";

const ant = {
  // eslint-disable-next-line
  install(Vue: any) {
    // Vue.config.globalProperties.$message = message;

    // 基础组件
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Menu.name, Menu);
    Vue.component(Menu.SubMenu.name, Menu.SubMenu);
    Vue.component(Menu.Item.name, Menu.Item);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Select.name, Select);
    Vue.component(Select.Option.name, Select.Option);
    Vue.component(Result.name, Result);

    // icon
    Vue.component(RedditOutlined.name, RedditOutlined);
    Vue.component(UserOutlined.name, UserOutlined);
    Vue.component(LockOutlined.name, LockOutlined);
  },
};
export default ant;
