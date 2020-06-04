import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Topbar from "./components/Topbar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { dataApi } from "./api/wordListData";
import { AppActions } from "./@types/app";
import { Word } from "./@types";
import Content from "./components/Content/Content";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#f1f1f1",
    },
  })
);

export default function Layout() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dataApi.getWordListData.then((rt) => {
      const data = rt as Array<Word>;
      dispatch({
        type: AppActions.UPDATE_WORD_DATA,
        payload: data,
      });
    });
  }, []);

  return (
    <div className={classes.root}>
      <Topbar />

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/:filterName">
          <Content />
        </Route>

        <Route exact path="/">
          <Redirect to="/Inbox" />
        </Route>
        {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
      </Switch>
    </div>
  );
}
