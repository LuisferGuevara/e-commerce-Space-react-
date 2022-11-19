import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers, getPlanet } from "../redux/Admin/admin.actions";
import { API } from "../utils/services/api";

const EditPlanet = () => {
  console.log("papapapap");
  console.log("helooooooo");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { planet } = useSelector((state) => state.admin);
  console.log(planet);

  useEffect(() => {
    dispatch(getPlanet(id));
  }, [dispatch]);
  
  useEffect(() => {
    console.log(planet);
    setValue("name", planet.name)
    setValue("image", planet.image)
    setValue("description", planet.description)
    setValue("gravity", planet.gravity)
    setValue("distance", planet.distance)
    setValue("price", planet.price)
  }, [planet])


  const edit = async (data) =>{
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    formData.append("description", data.description);
    formData.append("gravity", data.gravity);
    formData.append("distance", data.distance);
    formData.append("price", data.price);
    dispatch(editUsers(id, formData, navigate));
  }
  return (
    <div className="edit--box">
      <h2>CHANGING IS GOOD</h2>
      <form onSubmit={handleSubmit(edit)} className="create--form">
        <label>
          Name
          <input
            type="text"
            defaultValue={planet.name}
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
          <input type="file" {...register("image")} defaultValue={planet.image} />
        </label>
        <label>
          Description
          <textarea
            type="text"
            id="description--area"
            defaultValue={planet.description}
            {...register("description", { required: "Describe this planet" })}
          >
            {" "}
          </textarea>
        </label>
        <label>
          Gravity
          <input type="text" {...register("gravity")} defaultValue={planet.gravity} />
        </label>
        <label>
          Distance
          <input type="text" {...register("distance")} defaultValue={planet.distance} />
        </label>
        <label>
          Price
          <input type="text" {...register("price")} defaultValue={planet.price} />
        </label>

        <button className="glow-on-hover">Change</button>
      </form>
    </div>
  );
};

export default EditPlanet;
