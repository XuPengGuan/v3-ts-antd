import { defineHomeText } from "@/utils/enum";
import router from "@/router";
interface ITabsListItem {
  name: string;
}

interface IUserState {
  tabsActiveKey: string;
  tabsList: Array<ITabsListItem>;
}

const state: IUserState = {
  tabsActiveKey: defineHomeText,
  tabsList: [
    {
      name: defineHomeText,
    },
  ],
};

const mutations = {
  SET_PUSH_TABS_LIST(state: IUserState, data: ITabsListItem): void {
    const findData = state.tabsList.find((item) => item.name === data.name);
    if (!findData) {
      state.tabsList.push(data);
    }
  },
  SET_TABS_ACTIVE_KEY(state: IUserState, key: string): void {
    state.tabsActiveKey = key;
  },
  REMOVE_TABS_LIST_ITEM(state: IUserState, key: string): void {
    const { tabsList } = state;
    const [removeKey] = tabsList.splice(
      tabsList.findIndex((item) => item.name === key),
      1
    );
    // 如果删除当前选中的，则转为首页
    if (removeKey.name === state.tabsActiveKey) {
      router.push({ name: defineHomeText });
    }
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
