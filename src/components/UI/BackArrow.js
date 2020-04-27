import React from "react";
import PropTypes from "prop-types";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const BackArrow = ({ link, ...props }) => {
  return (
    <Box {...props }>
      <Link color="inherit" to={link} component={RouterLink}>
        <ArrowBackIcon />
      </Link>
    </Box>
  );
};

export default BackArrow;

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};
