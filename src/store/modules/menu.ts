import { defineHomeText } from "@/utils/enum";
type ITabsListItem = {
  name: string;
};

type IUserState = {
  tabsActiveKey: string;
  tabsList: Array<ITabsListItem>;
};

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
  SET_TABS_ACTIVE_KEY(state: IUserState, value: string): void {
    state.tabsActiveKey = value;
  },
  REMOVE_TABS_LIST_ITEM(state: IUserState, key: string): void {
    const { tabsList } = state;
    tabsList.splice(
      tabsList.findIndex((item) => item.name === key),
      1
    );
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
