import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useStyles } from "../styles/global";
import { useAppActions } from "../actions";

export default function Topbar() {
  const classes = useStyles();
  const { openSideManu, setNewWordDialog } = useAppActions();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Container
          style={{ display: "flex" }}
          className={classes.noLeftRightPadding}
          maxWidth="md"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openSideManu}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.topbarTitle}>
            YizyWord
          </Typography>
          <Button color="inherit" onClick={setNewWordDialog}>
            New
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
