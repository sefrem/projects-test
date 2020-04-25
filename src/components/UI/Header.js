import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarColorPrimary: {
    backgroundColor: "#00adef",
  },
});

const Header = ({ headerText, ...props }) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <AppBar position="static" className={classes.appBarColorPrimary}>
      <Toolbar>
        {children}
        <Typography variant="h5">{headerText}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
