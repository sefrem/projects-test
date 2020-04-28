import React from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import Copyright from "./Copyright/Copyright";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../utils/useForm";

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

const SignIn = () => {
  const classes = useStyles();

  const { values, handleChange, handleSubmit, errors, authError } = useForm();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={values.email || ""}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="test@test.ru"
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
            value={values.password || ""}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            placeholder="test"
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
          {authError && <FormHelperText error>{authError}</FormHelperText>}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
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
};

export default SignIn;
