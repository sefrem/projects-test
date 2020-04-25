import * as types from "./projects.types";
import CallApi from "../../api/api";

export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: types.FETCH_PROJECTS_REQUEST });
  let response = await CallApi.get("/project");
  if (response.success) {
    dispatch(getProjects(response.data));
  } else {
    dispatch(getError(response.errors[0]));
  }
};

const getProjects = (payload) => {
  return {
    type: types.FETCH_PROJECTS_SUCCESS,
    payload,
  };
};

const getError = (payload) => {
  return {
    type: types.FETCH_PROJECTS_ERROR,
    payload,
  };
};
