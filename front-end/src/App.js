import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/account" component={AccountPage} />
      </Switch>
    </div>
  );
}

export default App;
