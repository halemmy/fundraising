import * as types from "../constants/auth.constant";
import api from "../../apiService";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_STARTED });
  const response = await api.post("/auth/login", {
    email: email,
    password: password,
  });

  try {
    if (response.success === true) {
      dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILED, payload: error });
  }
};

const LogOut = (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
export default LogOut;
