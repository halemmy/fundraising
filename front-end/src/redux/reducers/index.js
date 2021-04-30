import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import registerReducer from "./register.reducer";

import blogReducer from "./blog.reducer";


import reactionReducer from "./reaction.reducers";
import reviewReducer from "./review.reducer";


export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  
  blog: blogReducer,

  reaction: reactionReducer,
  review: reviewReducer,

});
