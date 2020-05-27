import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f5f5f5",
    },
    appBar: {},
    toolbar: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    noLeftRightPadding: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    displayColumn: {
      height: "100vh",
    },
    sideMenu: {},
    mainContent: {
      height: "100%",
      overflow: "auto",
      backgroundColor: "#fff",
    },
    drawerPaper: {
      width: 320,
    },
    selectedMenuItem: {
      backgroundColor: "white",
    },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      backgroundColor: "red",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    topbarTitle: {
      flexGrow: 1,
      alignSelf: "center",
    },
  })
);
