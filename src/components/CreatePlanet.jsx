import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPlanet } from "../redux/Admin/admin.actions";
import { getPlanets} from "../redux/Planets/planets.action"
import "../styles/Admin.scss";

const CreatePlanet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = async (data) => {
    console.log(data.image[0])
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    formData.append("description", data.description);
    await dispatch(createPlanet(formData, navigate));
    dispatch(getPlanets());
  };
  return (
    <div className="creating--box">
      <h2>
        LET'S BE RICHER.LET'S CREATE A <span>NEW OFFER</span>
      </h2>
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
          <>{errors.email.type === "required" && <p>{errors.name.message}</p>}</>
        ) : null}
        <label>
          Image
          <input type="file" {...register("image")} />
        </label>
        <label>
          Description
          <input type="text" {...register("description", { required: "Describe this planet" })} />
        </label>
        <button className="glow-on-hover">Send</button>
      </form>
    </div>
  );
};

export default CreatePlanet;
