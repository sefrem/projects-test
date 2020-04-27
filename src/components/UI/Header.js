import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logout from "../Logout/Logout";

const useStyles = makeStyles({
  appBarColorPrimary: {
    backgroundColor: "#00adef",
  },
});

const Header = ({ headerText, ...props }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBarColorPrimary} {...props}>
      <Toolbar>
        {props.children}
        <Typography variant="h5">{headerText}</Typography>
        <Logout />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  children: PropTypes.node,
};
