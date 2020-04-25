import { combineReducers } from "redux";
import projects from "./projects/projects.reducer";
import auth from "./auth/auth.reducer";
import loader from './loader/loader.reducer'
import projectStructure from './projectStructure/projectStructure.reducer'

const reducerApp = combineReducers({
  loader,
  projects,
  projectStructure,
  auth,
});

export default reducerApp;
