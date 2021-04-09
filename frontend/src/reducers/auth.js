import {
  LOGIN_SUCCESS,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  ADD_PATIENT_DETAILS,
  PATIENT_LOGIN,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  err: null,
  isLoggedin: false,
  isAdmin: false,
  // inProgress: false,
  patientDetails: [],
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      sessionStorage.setItem("isAdmin", "true");
      return {
        ...state,
        user: action.user,
        isAdmin: true,
      };
    case LOG_OUT:
      sessionStorage.setItem("isAdmin", "false");
      return {
        ...state,
        user: {},
        isLoggedin: false,
        isAdmin: false,
      };
    case PATIENT_LOGIN:
      sessionStorage.setItem("isLoggedin", "true");
      return {
        ...state,
        user: {},
        isLoggedin: true,
        isAdmin: false,
      };
    case ADD_PATIENT_DETAILS:
      return {
        ...state,
        patientDetails: action,
      };

    default:
      return state;
  }
}
