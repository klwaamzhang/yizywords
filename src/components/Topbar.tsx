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
import { useNavActions, useDialogActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LogoText from "./0_logo/LogoText";
import { useRealmApp } from "../realm/RealmApp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    noLeftRightPadding: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
    },
    h5: {
      fontStyle: "italic",
    },
  })
);

export default function Topbar() {
  const classes = useStyles();
  const { openNewWordPage } = useDialogActions();
  const { openSideMenu } = useNavActions();

  const app = useRealmApp();

  return (
    <AppBar position="fixed">
      <Toolbar>
        {app.user ? (
          <Container
            style={{ display: "flex" }}
            className={classes.noLeftRightPadding}
            maxWidth="md"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={openSideMenu}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <LogoText />
            <Button color="inherit" onClick={openNewWordPage}>
              New
            </Button>
          </Container>
        ) : (
          <Container className={classes.container} maxWidth="md">
            <Typography variant="h5" classes={{ h5: classes.h5 }}>
              YizyWords
            </Typography>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
}
