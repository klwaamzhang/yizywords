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
import { useStyles } from "../styles/global";
import { AppContext, filterMainSectionData } from "../context";
import { useAppActions } from "../actions";

export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();

  const { state } = React.useContext(AppContext);
  const {
    closeSideManu,
    updateCategories,
    switchMainSectionMenu,
    setCurrentCategory,
  } = useAppActions();

  useEffect(() => {
    updateCategories();
  }, [state.dummyData]);

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const switchCategories = (category: string) => {
    setCurrentCategory(category);
    switchMainSectionMenu(filterMainSectionData(category, state.dummyData));
    closeSideManu();
  };

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          selected={state.currCategory === "Inbox"}
          button
          onClick={() => switchCategories("Inbox")}
        >
          <ListItemIcon>
            <MoveToInbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

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
              <ListItem
                selected={state.currCategory === text}
                button
                key={text}
                className={classes.nested}
                onClick={() => switchCategories(text)}
              >
                <ListItemIcon>
                  <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <div style={{ alignSelf: "end" }}>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
  return (
    <>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={state.isSideMenuOpen}
          onClose={closeSideManu}
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
        <Grid item sm={4} className={classes.sideMenu}>
          {drawer}
        </Grid>
      </Hidden>
    </>
  );
}
