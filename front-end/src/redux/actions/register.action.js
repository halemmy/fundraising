import * as types from "../constants/register.constant";
import api from "../../apiService";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  const response = await api.post("/users", {
    name: name,
    email: email,
    password: password,
  });

  try {
    if (response.success === true) {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};
