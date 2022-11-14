import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authroute = ({ component }) => {
  const { token } = useSelector((state) => state.auth);
  if (token) {
    return component;
  }
  if (!token) {
    return <Navigate to="/login" />;
  }
};

export default Authroute;
