import React from "react";
import { useForm } from "react-hook-form";

import { API } from "../utils/services/api";

const EditPlanet = () => {
  console.log("papapapap");
  console.log("helooooooo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const getPlanet = async () => {
    const result = await API.get("planets/:id");
    console.log(result);
  };
  getPlanet();
  const edit = (data) => {
    console.log(data);
  };
  return (
    <div className="edit--box">
      <h2>CHANGING IS GOOD</h2>
      <form onSubmit={handleSubmit(edit)} className="create--form">
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
          <input type="text" {...register("image")} />
        </label>
        <label>
          Description
          <input type="text" {...register("description", { required: "Describe this planet" })} />
        </label>
        <label>
          Gravity
          <input type="text" {...register("gravity")} />
        </label>
        <label>
          Distance
          <input type="text" {...register("distance")} />
        </label>
        <label>
          Price
          <input type="text" {...register("price")} />
        </label>
        <label>
          Title
          <input type="text" {...register("title")} />
        </label>
        <button className="glow-on-hover">Change</button>
      </form>
    </div>
  );
};

export default EditPlanet;
