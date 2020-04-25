import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginRight: theme.spacing(1),
  },
}));

const BackLink = ({ to, ...props }) => {
  const classes = useStyles();
  return (
    <Link component={RouterLink} className={classes.root} to={to}>
      <ArrowBackIcon />
    </Link>
  );
};

export default BackLink;
