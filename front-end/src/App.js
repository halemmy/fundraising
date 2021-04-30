import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import PublicNavbar from "./components/PublicNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <PublicNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
