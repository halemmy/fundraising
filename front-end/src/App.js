import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CampaignListPage from "./pages/CampaignListPage";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/campaigns" component={CampaignListPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
