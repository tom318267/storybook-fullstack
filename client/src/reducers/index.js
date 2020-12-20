import { combineReducers } from "redux";
import { authReducer } from "../reducers/auth";
import { storyReducer } from "../reducers/stories";

export default combineReducers({
  auth: authReducer,
  stories: storyReducer,
});
