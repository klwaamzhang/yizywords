import React from "react";
import Topbar from "./components/Topbar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";
import RegisterPage from "./components/RegisterPage";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#f1f1f1",
    },
  })
);

export default function App() {
  const classes = useStyles();

  const loggedIn = useSelector((state: RootState) => state.app.loggedIn);

  return (
    <div className={classes.root}>
      <Topbar />

      <Switch>
        <Route path="/login">
          {loggedIn ? <Redirect to="/Inbox" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {loggedIn ? <Redirect to="/Inbox" /> : <RegisterPage />}
        </Route>
        <Route path="/:filterName">
          {loggedIn ? <HomePage /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}
