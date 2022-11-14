import { API } from "../../utils/services/api";

export const getPlanets = (data, navigate) => async (dispatch) => {

    try {
      const result = await API.get("/planets", data);
      dispatch({ type: "setFilter", payload: result.data });
      navigate("/planets");
    } catch (error) {
      dispatch({ type: "planets_error", payload: error.response.data });
    }
  };