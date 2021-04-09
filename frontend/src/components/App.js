import "../App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import {
  Navbar,
  Page404,
  Login,
  Dashboard,
  AddPatient,
  PatientDetails,
  PatientLogin,
  Details,
  Home,
} from "./";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* the compo above these will be common for all */}
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/AddPatient" component={AddPatient} />
          <Route exact path="/PatientDetails" component={PatientDetails} />
          <Route exact path="/PatientLogin" component={PatientLogin} />

          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
