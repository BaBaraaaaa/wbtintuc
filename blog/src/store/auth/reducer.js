import { ACCESS_TOKEN } from "../../constants";
import { ACT_LOGIN_SUCCES, ACT_LOGOUT_SUCCES } from "./action";

const initState = {
  token: "",
  currentUser: null,
};

function reducer(authState = initState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCES:
      localStorage.setItem(ACCESS_TOKEN, action.payload.tokens);
      return {
        token: action.payload.tokens,
        currentUser: action.payload.user,
      };
    case ACT_LOGOUT_SUCCES: {
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        tokens: "",
        currentUser: null,
      };
    }
    default:
      return authState;
  }
}

export default reducer;
