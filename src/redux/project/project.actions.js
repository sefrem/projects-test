import * as types from "./project.types";
import CallApi from "../../api/api";

export const fetchProject = (id, rootStructureId) => async (dispatch) => {
  dispatch({ type: types.FETCH_PROJECT_REQUEST });
  let response = await CallApi.get(
    `/project/${id}/project-structure/${rootStructureId}`
  );
  if (response.success) {
    dispatch(getProject(response.data));
  } else {
    dispatch(getError(response.errors[0]));
  }
};

const getProject = (payload) => {
  return {
    type: types.FETCH_PROJECT_SUCCESS,
    payload,
  };
};

const getError = (payload) => {
  return {
    type: types.FETCH_PROJECT_ERROR,
    payload,
  };
};
