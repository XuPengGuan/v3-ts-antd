import { setCookie } from "@/utils/cookies";
import { ActionContext } from "vuex";
import { IStore } from "@/store/type";
type IUserinfo = {
  username?: string;
};

export type IUserState = {
  userinfo: IUserinfo;
  token: string;
};

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
    setCookie("cookie-value");
  },
};

export default {
  state,
  mutations,
  actions,
};
