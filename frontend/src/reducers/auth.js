import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  CLEAR_AUTH_STATE,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  err: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      // localStorage.setItem("document", JSON.stringify((isLoggedin: "true")));
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };

    default:
      return state;
  }
}
