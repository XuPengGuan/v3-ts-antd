// 定义未知字段的对象
import { RouteRecordRaw } from "vue-router";

export interface IUnknownObj {
  [propName: string]: string;
}

// 定义未知字段所组成的数组
export type IUnknownObjMakeArr = Array<IUnknownObj>;

// 未知字段组成的对象，并且得有children字段，值为 IUnknownObjTakeChildrenMakeArr，寓意为递归结构
export interface IUnknownObjTakeChildren {
  children: IUnknownObjTakeChildrenMakeArr;
}

// 由IUnknownObjTakeChildren组成的数组，寓意递归结构
export type IUnknownObjTakeChildrenMakeArr = Array<IUnknownObjTakeChildren>;

export type IMenus = Array<RouteRecordRaw>;

export interface IMenusOfChildren {
  children: IMenus;
}

// url?id=123&a=xxx参数转换为对象型式
export function urlToJson(url: string): IUnknownObj {
  const obj: IUnknownObj = {},
    index = url.indexOf("?"), // 看url有没有参数
    params = url.substr(index + 1); // 截取url参数部分 id = 1 & type = 2
  if (index !== -1) {
    // 有参数时
    const parr = params.split("&"); // 将参数分割成数组 ["id = 1 ", " type = 2"]
    for (const i of parr) {
      // 遍历数组
      const arr = i.split("="); // 1） i id = 1   arr = [id, 1]  2）i type = 2  arr = [type, 2]
      obj[arr[0]] = arr[1]; // obj[arr[0]] = id, obj.id = 1   obj[arr[0]] = type, obj.type = 2
    }
  }
  return obj;
}

export function unfoldArr(
  sourceArr: IUnknownObjTakeChildrenMakeArr,
  targetArr: IUnknownObjTakeChildrenMakeArr
): IUnknownObjTakeChildrenMakeArr {
  sourceArr.forEach((item) => {
    if (item.children) {
      unfoldArr(item.children, targetArr);
    } else {
      targetArr.push(item);
    }
  });
  return targetArr;
}

// 铺平menus菜单
export function unfoldMenuArr(sourceArr: IMenus, targetArr: IMenus): IMenus {
  sourceArr.forEach((item) => {
    if (item.children) {
      unfoldMenuArr(item.children, targetArr);
    } else {
      targetArr.push(item);
    }
  });
  return targetArr;
}
