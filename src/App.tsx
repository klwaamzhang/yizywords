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

const useStyles = makeStyles((theme: Theme) =>
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
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

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
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Container className={classes.noLeftRightPadding} maxWidth="md">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            This is the app bar
          </Container>
        </Toolbar>
      </AppBar>
      <Container
        className={classes.noLeftRightPadding + " " + classes.displayColumn}
        maxWidth="md"
      >
        <Grid
          container
          spacing={0}
          style={{ height: "100%", backgroundColor: "#eee" }}
        >
          <Hidden smUp implementation="js">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
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
          <Grid item xs={12} sm={8} className={classes.mainContent}>
            <div className={classes.toolbar} />
            <List>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                  <>
                    <ListItem key={value} role={undefined} button>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                        secondary={`this is the rjeio fje wajf eioafi ewjafio e fjeiwjafioejw aiofjeiow jaifoejpwa iofjeiwoa jfeiow afeiow jwiafopej safejw secondary text: ${
                          value + 3213
                        }`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="menu">
                          <MoreVert />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
