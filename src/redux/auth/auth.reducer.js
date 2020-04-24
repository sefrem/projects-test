import { UPDATE_AUTH } from "./auth.types";

const initialState = {
  isAuth: !!localStorage.getItem("accessToken"),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return { ...state, isAuth: !state.isAuth };
    default:
      return state;
  }
};

export default auth;
