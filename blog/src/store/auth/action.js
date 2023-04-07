import { ACCESS_TOKEN } from "../../constants";
import { authService } from "../../services/auth";

export const ACT_LOGIN_SUCCES = "ACT_LOGIN_SUCCES";
export const ACT_LOGOUT_SUCCES = "ACT_LOGOUT_SUCCES";

// Action
export function actLoginSuccess({ user, tokens }) {
  return {
    type: ACT_LOGIN_SUCCES,
    payload: {
      user,
      tokens,
    },
  };
}

export function actLogout() {
  return {
    type: ACT_LOGOUT_SUCCES,
  };
}

export function actFetchMeAsync(tokens) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(tokens);
      const user = response.data;
      dispatch(actLoginSuccess({ user, tokens }));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: "username hoac password khong hop le",
      };
    }
  };
}

export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const tokens = response.data.accesstoken;
      const responseMe = await dispatch(actFetchMeAsync(tokens));
      return {
        ok: true,
        error: responseMe.error,
      };
    } catch (error) {
      return {
        ok: false,
        error: "username hoac password khong hop le",
      };
    }
  };
}

export function actRegisterAsync({ email, username, password }) {
  return async (dispatch) => {
    try {
      const response = await authService.register({
        email,
        username,
        password,
      });
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: "Tên đăng nhập hoặc mật khẩu không hợp lệ",
      };
    }
  };
}
