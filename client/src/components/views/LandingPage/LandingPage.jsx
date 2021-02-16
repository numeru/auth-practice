import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/login">login</Link>
      <br />
      <Link to="/register">signin</Link>
    </div>
  );
};

export default LandingPage;
