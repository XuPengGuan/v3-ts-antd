import Cookies from "js-cookie";

const CookieKey = "admin-cookie";

function getCookie(): string {
  return Cookies.get(CookieKey);
}

function setCookie(value: string): boolean {
  return Cookies.set(CookieKey, value, { expires: 3 });
}

function removeCookie(): boolean {
  return Cookies.remove(CookieKey);
}

export { getCookie, setCookie, removeCookie };
