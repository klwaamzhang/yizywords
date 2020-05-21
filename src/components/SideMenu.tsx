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
} from "@material-ui/core";
import {
  Mail,
  Menu,
  MoveToInbox,
  MoreVert,
  ExpandMore,
} from "@material-ui/icons";
import { useStyles } from "../styles/global";

export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();
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
        {["Categories"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
          //   open={mobileOpen}
          //   onClose={handleDrawerToggle}
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
