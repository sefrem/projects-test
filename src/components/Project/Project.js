import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../UI/Header";
import Stats from "../UI/Stats";
import BackLink from "../UI/BackLink";
import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { fetchProjectStructure } from "../../redux/projectStructure/projectStructure.actions";
import { getProjectStructure } from "../../redux/projectStructure/projectStructure.reducer";
import { isFetchingProjectStructure } from "../../redux/loader/loader.reducer";

const Project = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const projectStructure = useSelector((state) =>
    getProjectStructure(state, params.projectId)
  );

  const isFetching = useSelector((state) => isFetchingProjectStructure(state));

  useEffect(() => {
    dispatch(fetchProjectStructure(params.projectId, params.rootStructureId));
  }, [dispatch, params.projectId, params.rootStructureId]);

  return (
    <>
      {isFetching ? (
        <CircularProgress />
      ) : (
        projectStructure[params.projectId] && (
          <>
            <Header headerText={projectStructure[params.projectId].title}>
              <BackLink to={"/projects"} />
            </Header>
            <Paper elevation={10}>
              <List component="ul">
                {projectStructure[params.projectId].children.map(
                  (projectStructure, index) => {
                    return (
                      <React.Fragment key={index}>
                        <ListItem
                          button
                          // component={Link}
                          // to={`project/${project.id}/project-structure/${project.root_structure_id}`}
                        >
                          <ListItemText primary={projectStructure.title} />
                          <Stats
                            borderColor="red"
                            text={projectStructure.notes_cnt_danger}
                          />
                          <Stats
                            borderColor="#ffc107"
                            text={projectStructure.notes_cnt_warning}
                          />
                          <Stats
                            borderColor="green"
                            text={projectStructure.notes_cnt_success}
                          />
                        </ListItem>

                        <Divider variant="middle" component="li" />
                      </React.Fragment>
                    );
                  }
                )}
              </List>
            </Paper>
          </>
        )
      )}
    </>
  );
}

export default Project
