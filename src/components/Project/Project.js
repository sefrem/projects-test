import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Header from "../UI/Header";
import BackArrow from "../UI/BackArrow";
import BreadcrumbsUI from "../UI/BreadcrumbsUI";
import { List, Paper, CircularProgress } from "@material-ui/core";
import ListData from "../UI/ListData";
import { fetchProject } from "../../redux/project/project.actions";
import { getProject } from "../../redux/project/project.reducer";
import { isFetchingProject } from "../../redux/loader/loader.reducer";

const Project = ({ history }) => {
  const { projectId, rootStructureId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => getProject(state));
  const currentProject = project[projectId];
  const isFetching = useSelector((state) => isFetchingProject(state));

  useEffect(() => {
    dispatch(fetchProject(projectId, rootStructureId));
  }, [dispatch, projectId, rootStructureId]);

  return (
    <>
      {isFetching ? (
        <CircularProgress />
      ) : (
        currentProject && (
          <>
            <Header headerText={currentProject.title}>
              <BackArrow history={history} />
            </Header>
            <Paper elevation={10}>
              <BreadcrumbsUI data={currentProject} projectId={projectId} />
              <List component="ul">
                {currentProject.children.map((project, index) => (
                  <ListData
                    data={project}
                    key={index}
                    link={`/structure/${project.project_id}/${project.id}`}
                  />
                ))}
              </List>
            </Paper>
          </>
        )
      )}
    </>
  );
};

export default withRouter(Project);
