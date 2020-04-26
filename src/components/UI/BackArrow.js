import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const BackArrow = ({ history, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} onClick={() => history.goBack()}>
      <ArrowBackIcon />
    </Box>
  );
};

export default BackArrow;
