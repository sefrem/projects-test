import * as types from "./projectStructure.types";

const initialState = {
  error: null,
};

const projectStructure = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PROJECT_STRUCTURE_SUCCESS:
      return {
        ...state,
        [payload.project_id]: payload,
      };
    case types.FETCH_PROJECT_STRUCTURE_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case types.FETCH_PROJECT_STRUCTURE_REQUEST:
    default:
      return state;
  }
};

export default projectStructure;

export const getProjectStructure = (state) => state.projectStructure;
