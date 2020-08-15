import React from "react";
import Topbar from "./components/Topbar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage";
import { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#fafafa",
    },
  })
);

export default function App() {
  const classes = useStyles();

  const app = useRealmApp();

  return (
    <div className={classes.root}>
      <Topbar />

      <Switch>
        <Route path="/login">
          {app.user ? <Redirect to="/Inbox" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {app.user ? <Redirect to="/Inbox" /> : <RegisterPage />}
        </Route>
        <Route path="/:filterName">
          {app.user ? (
            <RealmApolloProvider>
              <HomePage />
            </RealmApolloProvider>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}
