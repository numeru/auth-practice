import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "_action/user_action";

const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      return alert("비밀번호와 다릅니다.");
    }

    const body = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        history.push("/login");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
      />

      <button>SiGNIN</button>
    </form>
  );
};

export default RegisterPage;
