import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerApp from "./rootReducer";

const store = createStore(
  reducerApp,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
