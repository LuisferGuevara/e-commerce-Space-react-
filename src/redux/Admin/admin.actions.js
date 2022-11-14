import { API } from "../../utils/services/api";


export const createPlanet = (data, navigate) => async (dispatch) => {

  try {
    const result = await API.post("/planets/create", data);
    dispatch({ type: "createPlanet__ok", payload: result.data });
    console.log(result.data);
    navigate("/planets");
  } catch (error) {
    dispatch({ type: "createPlanet_error", payload: error.response.data });
  }
};
