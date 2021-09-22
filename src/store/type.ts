import { IUserState } from "@/store/modules/user";
import { IMenuState } from "@/store/modules/menu";

export interface IStore {
  user: IUserState;
  menu: IMenuState;
}
