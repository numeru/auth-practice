import { Route, Switch } from "react-router-dom";
import LandingPage from "components/views/LandingPage/LandingPage";
import LoginPage from "components/views/LoginPage/LoginPage";
import RegisterPage from "components/views/RegisterPage/RegisterPage";
import LogoutPage from "components/views/LogoutPage/LogoutPage";
import Auth from "hoc/Auth";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, false)} />
      <Route exact path="/login" component={Auth(LoginPage, false)} />
      <Route exact path="/register" component={Auth(RegisterPage, false)} />
      <Route exact path="/logout" component={Auth(LogoutPage, true)} />
    </Switch>
  );
}

export default App;
