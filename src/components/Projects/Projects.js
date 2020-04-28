import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/projects/projects.actions";
import {
  getProjects,
  getProjectsError,
} from "../../redux/projects/projects.reducer";
import { isFetchingProjects } from "../../redux/loader/loader.reducer";
import Header from "../UI/Header";
import ProjectsPresentation from "./ProjectsPresentation/ProjectsPresentation";
import { Paper, CircularProgress, Typography } from "@material-ui/core";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => getProjects(state));
  const isFetching = useSelector((state) => isFetchingProjects(state));
  const error = useSelector((state) => getProjectsError(state));
  const showSpinner = isFetching && !projects;

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (error) return <Typography align="center">{error}</Typography>;

  return (
    <>
      <Header headerText="Проекты" />
      <Paper elevation={10}>
        {showSpinner ? (
          <CircularProgress />
        ) : (
          <ProjectsPresentation projects={projects} />
        )}
      </Paper>
    </>
  );
};

export default Projects;
