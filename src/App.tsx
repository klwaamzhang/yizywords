import React from "react";
import Topbar from "./components/Topbar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Content from "./components/Content/Content";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

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
  console.log(loggedIn);

  return (
    <div className={classes.root}>
      <Topbar />

      <Switch>
        <Route path="/login">
          {loggedIn ? <Redirect to="/Inbox" /> : <LoginPage />}
        </Route>
        <Route path="/:filterName">
          {loggedIn ? <Content /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}
