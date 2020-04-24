import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "../utils/useRoutes";
import { getAuthState } from '../redux/auth/auth.utils'


export default function App() {
  const isAuthenticated = useSelector(store => getAuthState(store))
  const routes = useRoutes(isAuthenticated);

  return <div className="App">{routes}</div>;
}
