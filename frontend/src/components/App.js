import "../App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Navbar, Page404, Login } from "./";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* the compo above these will be common for all */}
          <Route exact path="/" component={Login} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
