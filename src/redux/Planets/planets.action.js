import { API } from "../../utils/services/api";

export const getPlanets = (navigate) => async (dispatch) => {
  try {
    const result = await API.get("/planets");
    dispatch({ type: "getPlanets", payload: result.data });
    navigate("/planets");
  } catch (error) {
    dispatch({ type: "planets_error", payload: error.response?.data });
  }
};


