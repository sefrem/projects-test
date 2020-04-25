import * as types from "./projects.types";

const initialState = {
  projects: [],
  error: null,
};

const projects = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload.slice(),
      };
    case types.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_PROJECTS_REQUEST:
    default:
      return state;
  }
};

export default projects;

export const getProjects = (state) => state.projects.projects;
