import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectStats: {
    padding: theme.spacing(1, 1.5),
    borderColor: (props) => props.borderColor,
    border: "2px solid",
    borderRadius: 5,
    fontWeight: 600,
    marginLeft: theme.spacing(1),
  },
}));

const Stats = (props) => {
  const { borderColor, text, ...other } = props;
  const classes = useStyles(props);
  return (
    <Box className={classes.projectStats} {...other}>
      {text}
    </Box>
  );
};

export default Stats;
