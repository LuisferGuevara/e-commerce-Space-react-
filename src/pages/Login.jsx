import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Auth/auth.actions";
import "../styles/Login.scss"


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (data) => {
    dispatch(loginUser(data, navigate));
  };

  return (
    <div className="login--container login-container-2">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(login)}>
        <label>
          Email
          <input
            type="text"
            {...register("email", {
              required: "Enter an email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                message: "Invalid email",
              },
            })}
          />
        </label>
        {errors.email ? (
          <>
            {errors.email.type === "required" && <p>{errors.email.message}</p>}
            {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
          </>
        ) : null}
        <label>
          Password
          <input type="password" {...register("password")} />
        </label>
        <button disabled={!isValid} onClick={() => dispatch({ type: "setClass" })} className="glow-on-hover" >
          Send
        </button>
      </form>
      <span>New to Capsule Corp?</span>
      <Link to="/register" className="glow-on-hover" >Register Yourself</Link>
    </div>
  );
};

export default Login;
