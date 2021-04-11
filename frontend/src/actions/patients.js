import {
  FETCH_PATIENTS_BEGIN,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
} from "./actionTypes";

export const fetchPatientsBegin = () => ({
  type: FETCH_PATIENTS_BEGIN,
});

export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: { patients },
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: { error },
});

export function fetchPatients() {
  return (dispatch) => {
    dispatch(fetchPatientsBegin());
    return fetch(`http://localhost:7000/patients`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        dispatch(fetchPatientsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPatientsFailure(error)));
  };
}

export const patientDetailsRequest = () => ({
  type: PATIENT_DETAILS_REQUEST,
});

export const patientDetailsSuccess = (patient) => ({
  type: PATIENT_DETAILS_SUCCESS,
  payload: { patient },
});

export const patientDetailsFail = (error) => ({
  type: PATIENT_DETAILS_FAIL,
  payload: { error },
});

export function listPatientDetails(id) {
  console.log("heya", id);
  return (dispatch) => {
    dispatch(patientDetailsRequest());
    return fetch(`http://localhost:7000/patients/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        dispatch(patientDetailsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(patientDetailsFail(error)));
  };
}
