import {
  LOGIN_SUCCESS,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  ADD_PATIENT_DETAILS,
} from "./actionTypes";

export function login(email, password) {
  return {
    type: LOGIN_SUCCESS,
    user: email,
  };
}

export function addPatient(
  first_name,
  last_name,
  phone,
  pincode,
  medicines,
  symptons,
  diagnosis
) {
  console.log("addPatient");
  return {
    type: ADD_PATIENT_DETAILS,
    first_name,
    last_name,
    phone,
    pincode,
    medicines,
    symptons,
    diagnosis,
  };
}

export function addDetails(
  first_name,
  last_name,
  phone,
  pincode,
  medicines,
  symptons,
  diagnosis,
  id
) {
  let _data = {
    id: id,
    first_name,
    last_name,
    phone,
    pincode,
    medicines: medicines,
    symptons: symptons,
    diagnosis: diagnosis,
  };
  return (dispatch) => {
    dispatch(
      addPatient(
        first_name,
        last_name,
        phone,
        pincode,
        medicines,
        symptons,
        diagnosis,
        id
      )
    );
    const url = "http://localhost:7000/patients";
    console.log("addPatientDetails");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(_data),
    });
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
