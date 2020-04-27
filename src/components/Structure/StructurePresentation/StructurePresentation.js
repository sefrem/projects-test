import React from "react";
import PropTypes from 'prop-types';
import Header from "../../UI/Header";
import BackArrow from "../../UI/BackArrow";
import { List, Paper, Typography, Box } from "@material-ui/core";
import ListData from "../../UI/ListData";
import { Breadcrumbs, Link, InputBase  } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../../utils/useInput'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(0, 2),
    marginBottom: theme.spacing(1),
  },
search: {
  position: 'relative',
  marginLeft: 'auto'
},
searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
  borderColor: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid',
  borderRadius: '10px',
},
inputInput: {
  padding: theme.spacing(1),
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  width: '100%',
}
}))

const StructurePresentation = ({ structure, projectId, handleChange }) => {
  const classes = useStyles();
  const backLink =
    structure.breadcrumbs.length === 1
      ? "/projects"
      : `/structure/${projectId}/${
          structure.breadcrumbs[structure.breadcrumbs.length - 2]
            .id
        }`;
  return (
    <>
      <Header headerText={structure.title}>
        <BackArrow link={backLink} mr={1}/>
      </Header>
      <Paper elevation={10}>
        <Breadcrumbs aria-label="breadcrumb">
          {structure.breadcrumbs.map((breadCrumb, index, array) =>
            index === array.length - 1 ? (
              <div key={index}>{breadCrumb.title}</div>
            ) : (
              <Link
                color="inherit"
                to={`/structure/${projectId}/${breadCrumb.id}`}
                component={RouterLink}
                key={index}
              >
                {breadCrumb.title}
              </Link>
            )
          )}
        </Breadcrumbs>
        <Box className={classes.root}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Искать..."
              onChange={handleChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            </Box>
        <List component="ul">
          {structure.children.length > 0 ? (
            structure.children.map((structure, index) => (
              <ListData
                data={structure}
                key={index}
                link={`/structure/${projectId}/${structure.id}`}
              />
            ))
          ) : (
            <Typography align="center">Здесь пока пусто</Typography>
          )}
        </List>
      </Paper>
    </>
  );
};

export default StructurePresentation;


StructurePresentation.propTypes = {
  structure: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired
};
