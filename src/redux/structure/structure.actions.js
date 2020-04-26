import * as types from "./structure.types";
import CallApi from "../../api/api";

export const fetchStructure = (id, structureId) => async (dispatch) => {
  dispatch({ type: types.FETCH_STRUCTURE_REQUEST });
  let response = await CallApi.get(
    `/project/${id}/project-structure/${structureId}`
  );
  if (response.success) {
    dispatch(getStructure(response.data));
  } else {
    dispatch(getError(response.errors[0]));
  }
};

const getStructure = (payload) => {
  return {
    type: types.FETCH_STRUCTURE_SUCCESS,
    payload,
  };
};

const getError = (payload) => {
  return {
    type: types.FETCH_STRUCTURE_ERROR,
    payload,
  };
};