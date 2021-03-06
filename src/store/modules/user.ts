import { setCookie, removeCookie } from "@/utils/cookies";
import { ActionContext } from "vuex";
import { IStore } from "@/store/type";
interface IUserinfo {
  username?: string;
}

export interface IUserState {
  userinfo: IUserinfo;
  token: string;
}

const state: IUserState = {
  userinfo: {},
  token: "",
};

const mutations = {
  SET_USERINFO(state: IUserState, { username }: IUserinfo): void {
    state.userinfo.username = username;
  },
};
const actions = {
  login(
    { commit }: ActionContext<IUserState, IStore>,
    userinfo: IUserinfo
  ): void {
    commit("SET_USERINFO", userinfo);
    setCookie(JSON.stringify(userinfo));
  },
  logout(): void {
    removeCookie();
    location.reload();
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
