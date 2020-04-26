import * as types from "./project.types";

const initialState = {
  error: null,
};

const project = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        [payload.project_id]: payload,
      };
    case types.FETCH_PROJECT_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_PROJECT_REQUEST:
    default:
      return state;
  }
};

export default project;

export const getProject = (state) => state.project;
