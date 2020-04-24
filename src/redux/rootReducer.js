import { combineReducers } from "redux";
import projects from "../redux/projects/projects.reducer";
import auth from "../redux/auth/auth.reducer";

const reducerApp = combineReducers({
  projects,
  auth,
});

export default reducerApp;
