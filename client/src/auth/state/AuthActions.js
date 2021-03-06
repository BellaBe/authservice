import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, USER_LOADING} from "./AuthTypes";
import { GET_ERRORS} from "../../errors/state/errorTypes";

export const registerUser = (userData, history) => dispatch =>{
    axios
        .post("api/auth/register", userData)
        .then(res => history.push("/login"))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const loginUser = userData => dispatch =>{
    axios
        .post("/api/auth/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setUserLoading = () =>{
    return {
        type: USER_LOADING
    }
}

export const logoutUser = () => dispatch =>{
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}