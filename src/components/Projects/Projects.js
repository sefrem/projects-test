import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/projects/projects.actions";
import { getProjects } from "../../redux/projects/projects.reducer";
import { isFetchingProjects } from "../../redux/loader/loader.reducer";
import Header from "../UI/Header";
import ListData from "../UI/ListData";
import { List, Paper, CircularProgress } from "@material-ui/core";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => getProjects(state));
  const isFetching = useSelector((state) => isFetchingProjects(state));

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <Header headerText="Проекты" />
      <Paper elevation={10}>
        {isFetching ? (
          <CircularProgress />
        ) : (
          <List component="ul">
            {projects.map((project, index) => (
              <ListData
                data={project}
                key={index}
                link={`/project/${project.id}/${project.root_structure_id}`}
              />
            ))}
          </List>
        )}
      </Paper>
    </>
  );
}
