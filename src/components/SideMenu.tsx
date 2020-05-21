import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Hidden,
  Drawer,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  ListItemSecondaryAction,
  Checkbox,
  Collapse,
} from "@material-ui/core";
import {
  Mail,
  Menu,
  MoveToInbox,
  MoreVert,
  ExpandMore,
  StarBorder,
  ExpandLess,
} from "@material-ui/icons";
import { useStyles } from "../styles/global";
import { AppContext } from "../context";
import { useAppActions } from "../actions";

export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();

  const { state } = React.useContext(AppContext);
  const { toggleSideManu } = useAppActions();

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button selected>
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
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            {state.categories.map((text, index) => (
              <ListItem button key={text} className={classes.nested}>
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
