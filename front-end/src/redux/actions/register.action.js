import * as types from "../constants/register.constant";
import api from "../../apiService";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  const response = await api.post("/users", {
    email: email,
    password: password,
    name: name,
  });

  try {
    if (response.data.success === true) {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: response.data.data.user,
      });
    }
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};
