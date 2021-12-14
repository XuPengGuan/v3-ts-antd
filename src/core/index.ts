import {
  Button,
  Input,
  Menu,
  Form,
  Select,
  Result,
  Dropdown,
  Tabs,
  Tooltip,
} from "ant-design-vue";
import {
  RedditOutlined,
  UserOutlined,
  LockOutlined,
  ExportOutlined,
  SyncOutlined,
  CloseOutlined,
  ReloadOutlined,
  DownOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  HomeOutlined,
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
    Vue.component(Menu.Divider.name, Menu.Divider);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Select.name, Select);
    Vue.component(Select.Option.name, Select.Option);
    Vue.component(Result.name, Result);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Tabs.TabPane.name, Tabs.TabPane);
    Vue.component(Tooltip.name, Tooltip);

    // icon
    Vue.component(RedditOutlined.name, RedditOutlined);
    Vue.component(UserOutlined.name, UserOutlined);
    Vue.component(LockOutlined.name, LockOutlined);
    Vue.component(ExportOutlined.name, ExportOutlined);
    Vue.component(SyncOutlined.name, SyncOutlined);
    Vue.component(CloseOutlined.name, CloseOutlined);
    Vue.component(ReloadOutlined.name, ReloadOutlined);
    Vue.component(DownOutlined.name, DownOutlined);
    Vue.component(VerticalRightOutlined.name, VerticalRightOutlined);
    Vue.component(VerticalLeftOutlined.name, VerticalLeftOutlined);
    Vue.component(HomeOutlined.name, HomeOutlined);
  },
};
export default ant;
