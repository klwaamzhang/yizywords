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
import Topbar from "./components/Topbar";
import { useStyles } from "./styles/global";
import MainSection from "./components/MainSection";
import SideMenu from "./components/SideMenu";

const App: React.FC = () => {
  const classes = useStyles();
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // function handleDrawerToggle() {
  //   setMobileOpen(!mobileOpen);
  // }

  return (
    <div className={classes.root}>
      <Topbar />
      <Container
        className={classes.noLeftRightPadding + " " + classes.displayColumn}
        maxWidth="md"
      >
        <Grid
          container
          spacing={0}
          style={{ height: "100%", backgroundColor: "#eee" }}
        >
          <SideMenu />
          <MainSection />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
