import { API, API2 } from "../../utils/services/api";

export const createPlanet = (data, navigate) => async (dispatch) => {
  try {
    const result = await API2.post("/planets/create", data);
    dispatch({ type: "createPlanet__ok", payload: result.data });
    navigate("/planets");
  } catch (error) {
    dispatch({ type: "createPlanet_error", payload: error.response.data });
  }
};
export const getPlanet = (id) => async (dispatch) => {
  const result = await API.get(`planets/${id}`);
  dispatch({type: "gettingPlanet"});
  dispatch({type: "setPlanet", payload: result.data});
};

export const editUsers = (id, data, navigate) => async(dispatch)  => {
  const result = await API2.put(`/planets/edit/${id}`, data);
  dispatch({type:"modifiedPlanet", payload: result.data})
  navigate("/planets")

}
