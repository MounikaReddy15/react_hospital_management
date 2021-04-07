import { LOGIN_SUCCESS, LOG_OUT, CLEAR_AUTH_STATE } from "./actionTypes";

export function login(email, password) {
  return {
    type: LOGIN_SUCCESS,
    user: email,
  };
}
export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
