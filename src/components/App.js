import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "../utils/useRoutes";
import { getAuthState } from "../redux/auth/auth.reducer";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../utils/styles";

export default function App() {
  const isAuthenticated = useSelector((state) => getAuthState(state));
  const routes = useRoutes(isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="App">
        {routes}
      </Container>
    </ThemeProvider>
  );
}
