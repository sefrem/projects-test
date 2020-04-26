import React from "react";
import { useDispatch } from "react-redux";
import { Link, Box } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { updateAuth } from "../../redux/auth/auth.actions";
import { Link as RouterLink } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const deleteAuth = () => {
    localStorage.removeItem("accessToken");
    dispatch(updateAuth());
  };
  return (
    <Box component="div" ml="auto">
      <Link
        onClick={deleteAuth}
        color="inherit"
        to={`/`}
        component={RouterLink}
      >
        <ExitToAppIcon />
      </Link>
    </Box>
  );
};

export default Logout;
