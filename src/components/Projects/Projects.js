import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/projects/projects.actions";
import { getProjectsState } from "../../redux/projects/project.utils";
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Stats from "../UI/Stats";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  List,
  Paper,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});

const useStyles = makeStyles({
  appBarColorPrimary: {
    backgroundColor: "#00adef",
  },
});

export default function Projects() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const projects = useSelector((store) => getProjectsState(store));

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <AppBar position="static" className={classes.appBarColorPrimary}>
          <Toolbar>
            <Typography variant="h5">Проекты</Typography>
          </Toolbar>
        </AppBar>

        <Paper elevation={10}>
          <List component="ul">
            {projects &&
              projects.map((project, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListItem
                      button
                      component={Link}
                      to={`project/${project.id}/project-structure/${project.root_structure_id}`}
                    >
                      <ListItemText primary={project.title} />
                      <Stats
                        borderColor="red"
                        text={project.notes_cnt_danger}
                      />
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
