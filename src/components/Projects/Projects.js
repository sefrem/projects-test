import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/projects/projects.actions";
import { getProjects } from "../../redux/projects/projects.reducer";
import { isFetchingProjects } from "../../redux/loader/loader.reducer";
import { Link } from "react-router-dom";
import Stats from "../UI/Stats";
import Header from "../UI/Header";
import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@material-ui/core";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => getProjects(state));
  const isFetching = useSelector((state) => isFetchingProjects(state));

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <Header headerText="Проекты"/>
      <Paper elevation={10}>
        {isFetching ? (
          <CircularProgress />
        ) : (
          <List component="ul">
            {projects.map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem
                    button
                    component={Link}
                    to={`project/${project.id}/project-structure/${project.root_structure_id}`}
                  >
                    <ListItemText primary={project.title} />
                    <Stats borderColor="red" text={project.notes_cnt_danger} />
                    <Stats
                      borderColor="#ffc107"
                      text={project.notes_cnt_warning}
                    />
                    <Stats
                      borderColor="green"
                      text={project.notes_cnt_success}
                    />
                  </ListItem>

                  <Divider variant="middle" component="li" />
                </React.Fragment>
              );
            })}
          </List>
        )}
      </Paper>
    </>
  );
}
