import {
  FETCH_PATIENTS_BEGIN,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  patients: [],
  loading: false,
  error: null,
};

export default function patients(state = initialState, action) {
  switch (action.type) {
    case FETCH_PATIENTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PATIENTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        patients: action.payload.patients,
      };

    case FETCH_PATIENTS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have patients to display anymore, so set `patients` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        patients: [],
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
