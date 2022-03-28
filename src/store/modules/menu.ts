import { message } from "ant-design-vue";
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
  collapsed: boolean;
  tabsList: Array<ITabsListItem>;
}

const state: IMenuState = {
  isRefresh: false,
  tabsActiveKey: defineHomeText,
  collapsed: false,
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
    if (tabsList.length <= 1) {
      message.warning("最后一项了，不能删除");
      return;
    }
    const [removeKey] = tabsList.splice(
      tabsList.findIndex((item) => item.name === key),
      1
    );
    // 如果删除当前选中的，则转为首页
    if (removeKey.name === state.tabsActiveKey) {
      router.push({ name: defineHomeText });
    }
  },
  // 设置是否刷新
  SET_IS_REFRESH(state: IMenuState, value: boolean): void {
    state.isRefresh = value;
  },
  // 切换菜单栏的折叠
  TOGGLE_COLLAPSED(state: IMenuState): void {
    state.collapsed = !state.collapsed;
  },
  // REMOVE_LEFT_ALL_TABS(state: IMenuState) {
  //   console.log(state);
  //   const { tabsList } = state;
  //   tabsList.splice(
  //     0,
  //     tabsList.findIndex((item) => item.name === key)
  //   );
  // },
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
