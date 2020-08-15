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
        <Route path={`${process.env.PUBLIC_URL}/login`}>
          {app.user ? (
            <Redirect to={`${process.env.PUBLIC_URL}/Inbox`} />
          ) : (
            <LoginPage />
          )}
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/register`}>
          {app.user ? (
            <Redirect to={`${process.env.PUBLIC_URL}/Inbox`} />
          ) : (
            <RegisterPage />
          )}
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/:filterName`}>
          {app.user ? (
            <RealmApolloProvider>
              <HomePage />
            </RealmApolloProvider>
          ) : (
            <Redirect to={`${process.env.PUBLIC_URL}/login`} />
          )}
        </Route>

        <Route exact path="/">
          <Redirect to={`${process.env.PUBLIC_URL}/login`} />
        </Route>
      </Switch>
    </div>
  );
}
