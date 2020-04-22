import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CallApi from "./api";
import { useRoutes } from "./routes";

function App() {

  const getProjects = async () => {
    let get = await CallApi.get("/project");
    if (get.success) {
    } else {
      throw new Error(get.errors[0]);
    }
  };

  const routes = useRoutes(true);

  return (
    <Router>
    <div className="App">{routes}</div>
      {/* <button onClick={getProjects}>Получить проекты</button> */}
     
    </Router>
  );
}

export default App;
