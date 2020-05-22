import React from "react";
import {
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useStyles } from "../styles/global";
import { AppContext } from "../context";

export default function MainSection() {
  const classes = useStyles();
  const { state } = React.useContext(AppContext);

  return (
    <Grid item xs={12} sm={8} className={classes.mainContent}>
      <div className={classes.toolbar} />
      <List>
        {state.dummyData.map((item, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem key={index} role={undefined} button>
              <ListItemText
                id={labelId}
                primary={item.text}
                secondary={item.notes}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="menu">
                  <MoreVert />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
