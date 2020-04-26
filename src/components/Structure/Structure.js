import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../UI/Header";
import BackArrow from "../UI/BackArrow";
import BreadcrumbsUI from "../UI/BreadcrumbsUI";
import { List, Paper, CircularProgress } from "@material-ui/core";
import ListData from "../UI/ListData";
import { fetchStructure } from "../../redux/structure/structure.actions";
import { getStructure } from "../../redux/structure/structure.reducer";
import { isFetchingStructure } from "../../redux/loader/loader.reducer";
import { withRouter } from "react-router-dom";

const Structure = ({ history }) => {
  const { projectId, structureId } = useParams();
  const dispatch = useDispatch();
  const structure = useSelector((state) => getStructure(state));
  const currentStructure = structure[structureId];
  const isFetching = useSelector((state) => isFetchingStructure(state));

  useEffect(() => {
    dispatch(fetchStructure(projectId, structureId));
  }, [dispatch, projectId, structureId]);

  return (
    <>
      {isFetching ? (
        <CircularProgress />
      ) : (
        currentStructure && (
          <>
            <Header headerText={currentStructure.title}>
              <BackArrow history={history} />
            </Header>
            <Paper elevation={10}>
              <BreadcrumbsUI data={currentStructure} projectId={projectId} />
              <List component="ul">
                {currentStructure.children.length > 0 ? (
                  currentStructure.children.map((structure, index) => (
                    <ListData data={structure} key={index} link={""} />
                  ))
                ) : (
                  <div>Здесь пока пусто</div>
                )}
              </List>
            </Paper>
          </>
        )
      )}
    </>
  );
};

export default withRouter(Structure);
