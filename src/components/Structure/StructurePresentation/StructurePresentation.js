import React from "react";
import PropTypes from "prop-types";
import Header from "../../UI/Header";
import BackArrow from "../../UI/BackArrow";
import Search from "../../UI/Search";
import { List, Paper, Typography, Breadcrumbs, Link } from "@material-ui/core";
import ListData from "../../UI/ListData";
import { Link as RouterLink } from "react-router-dom";

const StructurePresentation = ({ structure, projectId, handleSearchInput }) => {
  const backLink =
    structure.breadcrumbs.length === 1
      ? "/projects"
      : `/structure/${projectId}/${
          structure.breadcrumbs[structure.breadcrumbs.length - 2].id
        }`;
  return (
    <>
      <Header headerText={structure.title}>
        <BackArrow link={backLink} mr={1} />
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
        <Search pr={2} mb={1} onChange={handleSearchInput} />
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
  projectId: PropTypes.string.isRequired,
};
