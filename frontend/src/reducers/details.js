import {
  //   DELETE_PATIENT_DETAILS,
  PATIENT_DETAILS_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
} from "../actions/actionTypes";

const initialPatientState = {
  patient: {},
  loading: false,
  error: null,
};

export default function details(state = initialPatientState, action) {
  switch (action.type) {
    case PATIENT_DETAILS_REQUEST:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PATIENT_DETAILS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        patient: action.payload.patient,
      };

    case PATIENT_DETAILS_FAIL:
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
        patient: {},
      };
    // case DELETE_PATIENT_DETAILS: {
    //   return {
    //     message: action.payload,
    //   };
    // }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
