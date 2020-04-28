import React from "react";
import { useRoutes } from "../utils/useRoutes";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
    MuiCircularProgress: {
      root: {
        position: "absolute",
        top: "25%",
        left: "50%",
      },
    },
    MuiBreadcrumbs: {
      root: {
        padding: "10px",
      },
    },
  },
});

export default function App() {
  const routes = useRoutes();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="App">
        {routes}
      </Container>
    </ThemeProvider>
  );
}
