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
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import LogoText from "./0_logo/LogoText";

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
  })
);

export default function Topbar() {
  const classes = useStyles();
  const { openNewWordPage } = useDialogActions();
  const { openSideMenu } = useNavActions();

  const loggedIn = useSelector((state: RootState) => state.app.loggedIn);

  return (
    <AppBar position="fixed">
      <Toolbar>
        {loggedIn ? (
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
            <Typography variant="h5">YizyWords</Typography>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
}
