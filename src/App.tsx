import React from "react";
import { Provider } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Topbar from "./components/Topbar";
import MainSection from "./components/MainSection";
import SideMenu from "./components/SideMenu";
import WordDialog from "./components/WordDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { store } from "./store/reduxStore";
import UpdateLocationPathname from "./components/helper/UpdateLocationPathname";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#f1f1f1",
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      height: "100vh",
    },
    grid: {
      height: "100%",
      backgroundColor: "#fff",
    },
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <Topbar />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/:filterName">
              <Container className={classes.container} maxWidth="md">
                <Grid className={classes.grid} container spacing={0}>
                  <SideMenu />
                  <MainSection />
                </Grid>
              </Container>
            </Route>
            <Route exact path="/">
              <Redirect to="/Inbox" />
            </Route>
            {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
        <WordDialog />
        <UpdateLocationPathname />
      </Router>
    </Provider>
  );
}
