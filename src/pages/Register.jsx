import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../redux/Auth/auth.actions";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerUser = async (data) => {
    dispatch(newUser(data, navigate));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(registerUser)}>
        <label>
          Email
          <input
            type="text"
            {...register("email", {
              required: "Enter an email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                message: "Thats not a valid email",
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
        <button disabled={!isValid}>Enviar</button>
      </form>
    </div>
  );
};

export default Register;
