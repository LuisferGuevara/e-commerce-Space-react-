import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../redux/Auth/auth.actions";

const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logOutUser(navigate));
    dispatch({ type: "original" });
  };
  return (
    <button onClick={logOut} className="log--out glow-on-hover"  >
      Log out
    </button>
  );
};

export default Logout;
