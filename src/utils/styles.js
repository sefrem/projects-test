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
          top: "50%",
          left: "50%",
        },
      },
    },
  });