import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import Projects from "./Projects";

export const useRoutes = (isAuthenticated) => {
  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/projects" /> : <SignIn />}
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};
