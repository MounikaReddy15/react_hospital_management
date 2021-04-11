import { combineReducers } from "redux";

import auth from "./auth";
import patients from "./patients";
import details from "./details";

export default combineReducers({
  auth,
  patients,
  details,
});
