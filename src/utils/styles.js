import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
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
          padding: '10px',
        },
      },
    },
  });