import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallApi from "../../api/api";

export default function Project() {
  const [projectStructure, setProjectStructure] = useState(null);
  const params = useParams();

  const getProjectStructure = async () => {
    let response = await CallApi.get(
      `/project/${params.id}/project-structure/${params.rootStructureId}`
    );
    if (response.success) {
      setProjectStructure(response.data);
    } else {
      throw new Error(response.errors[0]);
    }
  };

  console.log(projectStructure);

  useEffect(() => {
    getProjectStructure();
  }, []);

  return <div>Project</div>;
}
