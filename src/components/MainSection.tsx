import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Hidden,
  Drawer,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";
import {
  Mail,
  Menu,
  MoveToInbox,
  MoreVert,
  ExpandMore,
} from "@material-ui/icons";
import { useStyles } from "../styles/global";

export default function MainSection() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} className={classes.mainContent}>
      <div className={classes.toolbar} />
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <>
              <ListItem key={value} role={undefined} button>
                <ListItemText
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                  secondary={`this is the rjeio fje wajf eioafi ewjafio e fjeiwjafioejw aiofjeiow jaifoejpwa iofjeiwoa jfeiow afeiow jwiafopej safejw secondary text: ${
                    value + 3213
                  }`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="menu">
                    <MoreVert />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Grid>
  );
}
