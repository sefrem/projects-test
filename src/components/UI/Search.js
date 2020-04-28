import React from "react";
import PropTypes from "prop-types";
import { Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  search: {
    position: "relative",
    marginLeft: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    borderColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid",
    borderRadius: "10px",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

const Search = ({ onChange, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} {...props}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Искать..."
          onChange={onChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Box>
  );
};

export default Search;

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};
