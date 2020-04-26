import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const BreadcrumbsUI = ({ data, projectId, ...props }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {data.breadcrumbs.map((breadCrumb, index, array) =>
        index === array.length - 1 ? (
          <div  key={index} >{breadCrumb.title}</div>
        ) : (
          <Link
            color="inherit"
            to={`/project/${projectId}/${breadCrumb.id}`}
            component={RouterLink}
            key={index}
          >
            {breadCrumb.title}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsUI;

