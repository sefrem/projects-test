import React from "react";
import CallApi from "./api";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00adef",
  },
  cssOutlinedInput: {
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#00adef",
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#00adef",
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
}));

const signIn = async () => {
    let auth = await CallApi.post("/auth", {
      body: {
        login: "test@test.ru",
        password: "test",
        type: "web",
      },
    });
    if (auth.success) {
      let accessToken = await auth.data.accessToken;
      localStorage.setItem("accessToken", `${accessToken}`);
    } else {
      throw new Error(auth.errors[0]);
    }
  };

export default function SignIn() {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signIn}
          >
            Войти
          </Button>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dynamics.i-neti.ru/">
        Neti
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
