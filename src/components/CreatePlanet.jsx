import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPlanet } from "../redux/Admin/admin.actions";
import "../styles/Admin.scss"

const CreatePlanet = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const create = async (data) =>{
        dispatch(createPlanet(data, navigate))
    }
  return (
  <div className="creating--box">
  <h2>LET'S BE RICHER.LET'S CREATE A <span>NEW OFFER</span></h2>
    <form onSubmit={handleSubmit(create)} className="create--form">
        <label>
          Name
          <input
            type="text"
            {...register("name", {
              required: "Enter an name",
            })}
          />
        </label>
        {errors.name ? (
          <>
            {errors.email.type === "required" && <p>{errors.name.message}</p>}
          </>
        ) : null}
        <label>
          Image
          <input type="text" {...register("image")} />
        </label>
        <label>
            Description
            <input type="text" {...register("description",{required:"Describe this planet"})}/>
        </label>
        <button className="glow-on-hover">Send</button>
      </form>
  </div>);
};

export default CreatePlanet;
