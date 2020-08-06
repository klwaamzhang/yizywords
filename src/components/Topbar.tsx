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
import { useNavActions, useDialogActions } from "../redux/actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LogoText from "./0_logo/LogoText";
import { useRealmApp } from "../realm/RealmApp";
import appBarIcon from "../resources/images/appBarIcon.png";

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
      alignSelf: "center",
    },
    icon: {
      margin: theme.spacing(1),
      width: 30,
    },
    icon2: {
      width: 20,
      height: 20,
      alignSelf: "center",
      marginRight: theme.spacing(0.5),
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
            <img alt="appBarIcon" src={appBarIcon} className={classes.icon2} />
            <LogoText />
            <Button color="inherit" onClick={openNewWordPage}>
              New
            </Button>
          </Container>
        ) : (
          <Container className={classes.container} maxWidth="md">
            <img alt="appBarIcon" src={appBarIcon} className={classes.icon} />
            <Typography variant="h5" classes={{ h5: classes.h5 }}>
              YizyWords
            </Typography>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
}
