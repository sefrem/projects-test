import React, { useEffect, useState } from "react";
import CallApi from "./api";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
  Box,
} from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";


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
  rootBox: {
    component: "div",
    p: 1,
    borderColor: (props) => props.borderColor,
    border: 2,
    borderRadius: 5,
    fontWeight: 600,
  },
  appBarColorPrimary: {
    backgroundColor: "#00adef",
  },
});

const defaultBoxProps = {
    component: "div",
    pl: 1.5,
    pr: 1.5,
    pt: 1,
    pb: 1,
    border: 2,
    borderRadius: 5,
    fontWeight: 600,
    m: 1
  };

export default function Projects() {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    let response = await CallApi.get("/project");
    if (response.success) {
      console.log(response.data);
      setProjects(response.data);
    } else {
      throw new Error(response.errors[0]);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

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
                    <ListItem button component="li">
                      <ListItemText primary={project.title} />
                      <Box borderColor="error.main" {...defaultBoxProps}>
                        {project.notes_cnt_danger}
                      </Box>
                      <Box borderColor="#ffc107" {...defaultBoxProps}>
                        {project.notes_cnt_warning}
                      </Box>
                      <Box borderColor="green" {...defaultBoxProps}>
                        {project.notes_cnt_success}
                      </Box>
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
