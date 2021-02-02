import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const history = useHistory();

  const clickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        history.push("/login");
      }
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>LOGOUT</button>
    </div>
  );
};

export default LandingPage;
