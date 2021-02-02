import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "_action/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthCheck() {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload.isAuth) {
          if (option === true) {
            history.push("/login");
          }
        } else if (adminRoute === true && !res.payload.isAdmin) {
          history.push("/");
        } else if (option === false) {
          history.push("/");
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthCheck;
}
