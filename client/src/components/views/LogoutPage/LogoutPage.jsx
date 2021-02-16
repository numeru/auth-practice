import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LogoutPage = () => {
  const history = useHistory();

  const clickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        history.push("/");
      }
    });
  };

  return (
    <div>
      <h1>Login Success!</h1>
      <h2>Please Logout!</h2>
      <button onClick={clickHandler}>LOGOUT</button>
    </div>
  );
};

export default LogoutPage;
