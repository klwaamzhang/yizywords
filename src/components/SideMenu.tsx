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
import { Mail, MoveToInbox, ExpandMore, ExpandLess } from "@material-ui/icons";
import { useStyles } from "../styles/global";
import { AppContext, filterMainSectionData } from "../context";
import { useAppActions } from "../actions";

export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();

  const { state } = React.useContext(AppContext);
  const {
    toggleSideManu,
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
  };

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => switchCategories("Inbox")}>
          <ListItemIcon>
            <MoveToInbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <MoveToInbox />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {state.categories.map((text, index) => (
              <ListItem
                button
                key={text}
                className={classes.nested}
                onClick={() => switchCategories(text)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
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
              <MoveToInbox />
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
          onClose={toggleSideManu}
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
