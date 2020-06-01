import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Hidden,
  Drawer,
  Collapse,
} from "@material-ui/core";
import { MoveToInbox, ExpandMore, ExpandLess } from "@material-ui/icons";
import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext, NavContext } from "../context";
import { useNavActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LogoText from "./logo/LogoText";
import { Link, useLocation } from "react-router-dom";
import useHelperFunctions from "../utilities/helper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    },
    toolbar: theme.mixins.toolbar,
    sideMenuLogo: {
      display: "flex",
      paddingLeft: theme.spacing(2),
    },
    nestedListItem: {
      paddingLeft: theme.spacing(4),
    },
    drawerPaper: {
      width: 320,
    },
    firstList: {
      flexGrow: 1,
    },
    routerLink: {
      color: "black",
      textDecoration: "none",
    },
  })
);

export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();

  const location = useLocation();
  const { toUrlFormat } = useHelperFunctions();

  const { state: appState } = React.useContext(AppContext);
  const { state: navState } = React.useContext(NavContext);
  const { closeSideMenu, updateCategories } = useNavActions();

  console.log("Component: Side Menu");
  useEffect(() => {
    console.log("useEffect: Side Menu");
    updateCategories(appState.dummyData);
  }, [appState.dummyData.length]);

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <React.Fragment>
      <div className={`${classes.toolbar} ${classes.sideMenuLogo}`}>
        <LogoText />
      </div>
      <Divider />
      <List className={classes.firstList}>
        <Link className={classes.routerLink} to="/Inbox">
          <ListItem
            selected={location.pathname === "/Inbox"}
            button
            onClick={closeSideMenu}
          >
            <ListItemIcon>
              <MoveToInbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </Link>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {navState.categories.map((text, index) => (
              <Link
                className={classes.routerLink}
                key={index}
                to={`/${toUrlFormat(text)}`}
              >
                <ListItem
                  selected={location.pathname === `/${toUrlFormat(text)}`}
                  button
                  className={classes.nestedListItem}
                  onClick={closeSideMenu}
                >
                  <ListItemIcon>
                    <BookmarkBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
        <Link className={classes.routerLink} to="/Recycle-Bin">
          <ListItem
            selected={location.pathname === "/Recycle-Bin"}
            onClick={closeSideMenu}
            button
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Recycle Bin" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={navState.isSideMenuOpen}
          onClose={closeSideMenu}
          className={classes.root}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Grid item sm={4} className={classes.root}>
          {drawer}
        </Grid>
      </Hidden>
    </React.Fragment>
  );
}
