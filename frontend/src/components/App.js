import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Navbar,
  Page404,
  Login,
  Dashboard,
  AddPatient,
  ListPatientDetails,
  PatientLogin,
  Home,
} from "./";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/patients?q=username" component={ListPatientDetails} />
          <Route path="/patient/:id" component={ListPatientDetails} />

          <Route exact path="/Login" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/AddPatient" component={AddPatient} />

          <Route exact path="/PatientLogin" component={PatientLogin} />

          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
