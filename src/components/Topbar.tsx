import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useNavActions, useDialogActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
    topbarTitle: {
      flexGrow: 1,
      alignSelf: "center",
    },
  })
);

export default function Topbar() {
  const classes = useStyles();
  const { openNewWordDialog } = useDialogActions();
  const { openSideMenu } = useNavActions();

  console.log("Component: Topbar");

  return (
    <AppBar position="fixed">
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
            onClick={openSideMenu}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <LogoText />
          <Button color="inherit" onClick={openNewWordDialog}>
            New
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
