import React from "react";
import PropTypes from "prop-types";
import ListData from "../../UI/ListData";
import { List } from "@material-ui/core";


const ProjectsPresentation = ({ projects }) => {
  return (
    <List component="ul">
      {projects.map((project, index) => (
        <ListData
          data={project}
          key={index}
          link={`/structure/${project.id}/${project.root_structure_id}`}
        />
      ))}
    </List>
  );
};

export default ProjectsPresentation;

ProjectsPresentation.propTypes = {
  projects: PropTypes.array.isRequired,
};
