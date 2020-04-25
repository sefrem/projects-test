import * as types from "./projectStructure.types";
import CallApi from "../../api/api";

export const fetchProjectStructure = (id, rootStructureId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PROJECT_STRUCTURE_REQUEST });
  let response = await CallApi.get( `/project/${id}/project-structure/${rootStructureId}`);
  if (response.success) {
      
    dispatch(getProjectStructure(response.data));
  } else {
    dispatch(getError(response.errors[0]));
  }
};

const getProjectStructure = (payload) => {
  return {
    type: types.FETCH_PROJECT_STRUCTURE_SUCCESS,
    payload,
  };
};

const getError = (payload) => {
  return {
    type: types.FETCH_PROJECT_STRUCTURE_ERROR,
    payload,
  };
};


