import { defineHomeText } from "@/utils/enum";
import router from "@/router";
import { ActionContext } from "vuex";
import { IStore } from "@/store/type";
interface ITabsListItem {
  name: string;
}

export interface IMenuState {
  isRefresh: boolean;
  tabsActiveKey: string;
  tabsList: Array<ITabsListItem>;
}

const state: IMenuState = {
  isRefresh: false,
  tabsActiveKey: defineHomeText,
  tabsList: [
    {
      name: defineHomeText,
    },
  ],
};

const mutations = {
  // 添加tabs某一项
  SET_PUSH_TABS_LIST(state: IMenuState, data: ITabsListItem): void {
    const findData = state.tabsList.find((item) => item.name === data.name);
    if (!findData) {
      state.tabsList.push(data);
    }
  },
  // 设置当前选中
  SET_TABS_ACTIVE_KEY(state: IMenuState, key: string): void {
    state.tabsActiveKey = key;
  },
  // 删除tabs某一项
  REMOVE_TABS_LIST_ITEM(state: IMenuState, key: string): void {
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
  SET_IS_REFRESH(state: IMenuState, value: boolean): void {
    state.isRefresh = value;
  },
};

const actions = {
  setIsRefresh({ commit }: ActionContext<IMenuState, IStore>): void {
    commit("SET_IS_REFRESH", true);
    setTimeout(() => {
      commit("SET_IS_REFRESH", false);
    }, 200);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
