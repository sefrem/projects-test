import React from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import { ListItem, ListItemText, Divider } from "@material-ui/core";

const ListData = ({ data, link, ...props }) => {
  return (
    <>
      <ListItem button component={link ? Link : ""} to={link}>
        <ListItemText primary={data.title} />
        <Stats borderColor="red" text={data.notes_cnt_danger} />
        <Stats borderColor="#ffc107" text={data.notes_cnt_warning} />
        <Stats borderColor="green" text={data.notes_cnt_success} />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
};

export default ListData;
