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
import { useAppActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  const { openSideManu, setNewWordDialog } = useAppActions();

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
            onClick={openSideManu}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.topbarTitle}>
            YizyWords
          </Typography>
          <Button color="inherit" onClick={setNewWordDialog}>
            New
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
