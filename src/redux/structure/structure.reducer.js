import * as types from "./structure.types";

const initialState = {
  error: null,
};

const structure = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_STRUCTURE_SUCCESS:
      return {
        ...state,
        [payload.id]: payload,
      };
    case types.FETCH_STRUCTURE_ERROR:
      return {
        ...state,
        error: payload,
      };
    case types.FETCH_STRUCTURE_REQUEST:
    default:
      return state;
  }
};

export default structure;

export const getStructure = (state) => state.structure;
export const getStructureError = (state) => state.structure.error;
