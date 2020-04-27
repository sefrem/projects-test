import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import cloneDeep from "lodash.clonedeep";
import { CircularProgress, Typography } from "@material-ui/core";
import { fetchStructure } from "../../redux/structure/structure.actions";
import {
  getStructure,
  getStructureError,
} from "../../redux/structure/structure.reducer";
import { isFetchingStructure } from "../../redux/loader/loader.reducer";
import StructurePresentation from "./StructurePresentation/StructurePresentation";

const Structure = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { projectId, structureId } = useParams();
  const dispatch = useDispatch();
  const structure = useSelector((state) => getStructure(state));
  const error = useSelector((state) => getStructureError(state));
  const currentStructure = structure[structureId];
  const isFetching = useSelector((state) => isFetchingStructure(state));
  const showSpinner = isFetching && !currentStructure;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  let filterdStructure = cloneDeep(currentStructure);

  if (filterdStructure) {
    let filteredChildren = filterdStructure.children.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filterdStructure.children = [...filteredChildren];
  }

  useEffect(() => {
    dispatch(fetchStructure(projectId, structureId));
    setSearchTerm("");
  }, [dispatch, projectId, structureId]);

  if (error) return <Typography align="center">{error}</Typography>;

  return (
    <>
      {showSpinner ? (
        <CircularProgress />
      ) : (
        currentStructure && (
          <StructurePresentation
            structure={filterdStructure}
            projectId={projectId}
            handleChange={handleChange}
          />
        )
      )}
    </>
  );
};

export default Structure;
