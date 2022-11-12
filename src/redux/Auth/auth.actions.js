import { API } from "../../utils/services/api";

export const loginUser = (data, navigate) =>  async (dispatch) =>{
     console.log(data)
     try {
        const result = await API.post("/users/login", data)
        console.log(result.data);
        dispatch({type:'login_user_ok', payload:result.data})
        localStorage.setItem("token", result.data.token)
        navigate("/")
    } catch (error) {
        dispatch({type:"login_user_error", payload:error.message})
    }
}
export const newUser = (data, navigate) => async(dispatch) =>{
    try {
        const result = await API.post("users/createNewUser", data)
        console.log(result.data);
        dispatch({type:"register_user_ok", payload:result.data})
        navigate('/login')
    } catch (error) {
        dispatch({type:"register_user_error", payload:error.message})
    }
}
export  const logOutUser = () => (dispatch) =>{
    try {
        dispatch({type:"logout_user_ok"})
        localStorage.removeItem('token')
        
    } catch (error) {
        dispatch({type:"logout_user_error", payload: error.message})
    }
}

export const checkSession = (token, navigate) =>async(dispatch) => {
        const result = await API.post("users/checksession");
        dispatch({type:"user_checksession", payload:token})
        console.log("K ASE?", result.data);
        localStorage.setItem('token', token)
        console.log(token);
        navigate('/')
}