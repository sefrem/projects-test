import React from 'react'
import { Link } from "react-router-dom";
import Stats from "./Stats";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";


const ListData = ({data, link, ...props}) => {
    return (
        <List component="ul">
            {data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem
                    button
                    component={Link}
                    to={link}
                  >
                    <ListItemText primary={data.title} />
                    <Stats borderColor="red" text={data.notes_cnt_danger} />
                    <Stats
                      borderColor="#ffc107"
                      text={data.notes_cnt_warning}
                    />
                    <Stats
                      borderColor="green"
                      text={data.notes_cnt_success}
                    />
                  </ListItem>

                  <Divider variant="middle" component="li" />
                </React.Fragment>
              );
            })}
          </List>
    )
}

export default ListData