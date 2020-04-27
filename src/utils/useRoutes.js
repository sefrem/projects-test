import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Projects from "../components/Projects/Projects";
import Structure from "../components/Structure/Structure";

export const useRoutes = (isAuthenticated) => {
  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/projects" /> : <SignIn />}
      </Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/structure/:projectId/:structureId" component={Structure} />
    </Switch>
  );
};
