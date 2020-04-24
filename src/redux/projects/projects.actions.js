import { GET_PROJECTS } from "./projects.types";
import CallApi from "../../api/api";

export const fetchProjects = () => async (dispatch) => {
  let response = await CallApi.get("/project");
  if (response.success) {
    dispatch(getProjects(response.data));
  } else {
    throw new Error(response.errors[0]);
  }
};

 const getProjects = (payload) => {
  return {
    type: GET_PROJECTS,
    payload,
  };
};

