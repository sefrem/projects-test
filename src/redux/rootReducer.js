import { combineReducers } from "redux";
import projects from "./projects/projects.reducer";
import auth from "./auth/auth.reducer";
import loader from './loader/loader.reducer'
import project from './project/project.reducer'
import structure from './structure/structure.reducer'

const reducerApp = combineReducers({
  auth,
  loader,
  projects,
  project,
  structure,
});

export default reducerApp;
