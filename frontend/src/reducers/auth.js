import {
  LOGIN_SUCCESS,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  ADD_PATIENT_DETAILS,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  err: null,
  isLoggedin: false,
  inProgress: false,
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
    case ADD_PATIENT_DETAILS:
      return {
        ...state,
        patientDetails: action,
      };

    default:
      return state;
  }
}
