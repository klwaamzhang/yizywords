import React from "react";
import { AppBar, Toolbar, Container, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useStyles } from "../styles/global";
import { useAppActions } from "../actions";

export default function Topbar() {
  const classes = useStyles();
  const { toggleSideManu } = useAppActions();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Container className={classes.noLeftRightPadding} maxWidth="md">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSideManu}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          This is the app bar
        </Container>
      </Toolbar>
    </AppBar>
  );
}
