import * as types from '../constants/auth.constant'
  
const initialState = {
  isAuthenticated: !!localStorage.getItem("Token"),
  auth: {},
  loading: false,
  error: null
}
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_STARTED:
      return {...state, loading:true}
    case types.LOGIN_SUCCESS:
      return {...state, auth:payload, loading:false, isAuthenticated:true}
    case types.LOGIN_FAILED:
      return { ...state, error: payload }
    case types.LOGOUT:
      return { ...state, isAuthenticated: false }
    case types.LOGGEDIN:
      return {...state, auth:payload, loading:false, isAuthenticated:true}
    default:
      return state;
  }

};

export default authReducer;
