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
import { AppContext, filterMainSectionData } from "../context";
import { useAppActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LogoText from "./logo/LogoText";
import { Link, useLocation, useParams } from "react-router-dom";
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
  const { convertLinkName } = useHelperFunctions();

  const { state } = React.useContext(AppContext);
  const {
    closeSideManu,
    updateCategories,
    switchMainSectionContent,
    setCurrentTab,
  } = useAppActions();

  useEffect(() => {
    updateCategories();
  }, [state.dummyData]);

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const switchCategories = (currTab: string) => {
    setCurrentTab(currTab);
    switchMainSectionContent(filterMainSectionData(currTab, state.dummyData));
    closeSideManu();
  };

  const showRecycleBin = () => {
    setCurrentTab("Recycle Bin");
    switchMainSectionContent(
      state.dummyData.filter((item) => item.status === "deleted")
    );
  };

  const drawer = (
    <React.Fragment>
      <div className={`${classes.toolbar} ${classes.sideMenuLogo}`}>
        <LogoText />
      </div>
      <Divider />
      <List className={classes.firstList}>
        <Link className={classes.routerLink} to="/inbox">
          <ListItem
            selected={location.pathname === "/inbox"}
            button
            // onClick={() => switchCategories("Inbox")}
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
            {state.categories.map((text, index) => (
              <Link
                className={classes.routerLink}
                key={index}
                to={`/${convertLinkName(text)}`}
              >
                <ListItem
                  selected={location.pathname === `/${convertLinkName(text)}`}
                  button
                  className={classes.nestedListItem}
                  // onClick={() => switchCategories(text)}
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
        <Link className={classes.routerLink} to="/recycle-bin">
          <ListItem
            selected={location.pathname === "/recycle-bin"}
            // onClick={showRecycleBin}
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
          open={state.isSideMenuOpen}
          onClose={closeSideManu}
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
