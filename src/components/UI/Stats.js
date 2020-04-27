import React from "react";
import PropTypes from "prop-types";
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

const Stats = ({ text, ...props }) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.projectStats} {...props}>
      {text}
    </Box>
  );
};

export default Stats;

Stats.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
