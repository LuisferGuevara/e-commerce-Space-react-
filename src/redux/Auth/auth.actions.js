import { API } from "../../utils/services/api";

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    const result = await API.post("/users/login", data);
    dispatch({ type: "login_user_ok", payload: result.data });
    console.log(result.data);
    localStorage.setItem("token", result.data.token);
    navigate("/corp");
  } catch (error) {
    dispatch({ type: "login_user_error", payload: error.response.data });
  }
};

export const newUser = (data, navigate) => async (dispatch) => {
  try {
    const result = await API.post("users/createNewUser", data);
    dispatch({ type: "register_user_ok", payload: result.data });
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_user_error", payload: error.message });
  }
};

export const logOutUser = (navigate) => (dispatch) => {
  try {
    dispatch({ type: "logout_user_ok" });
    localStorage.removeItem("token");
    navigate("/");
  } catch (error) {
    dispatch({ type: "logout_user_error", payload: error.message });
  }
};

export const checkSession = (token, navigate) => async (dispatch) => {
  const result = await API.post("users/checksession");
  console.log(result);
  dispatch({ type: "user_checksession", payload: { token: token, user: result.data } });
  localStorage.setItem("token", token);
  navigate("/corp");
  dispatch({ type: "setClass" });
};
