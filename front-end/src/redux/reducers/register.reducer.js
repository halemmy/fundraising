import * as types from '../constants/register.constant';

const initialState = {
    isCreated: false,
    userInfo: {},
    loading: false,
    error: null
    
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return {...state, loading:true}
    case types.REGISTER_SUCCESS:
      return {...state, userInfo: payload, loading:false, isCreated: true}
    case types.REGISTER_FAILURE:
      return { ...state, error: payload }
    default:
      return state;
  }

};

export default registerReducer;