import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "components/views/LandingPage/LandingPage";
import LoginPage from "components/views/LoginPage/LoginPage";
import RegisterPage from "components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
}

export default App;
