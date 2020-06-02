import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Topbar from "./components/Topbar";
import MainSection from "./components/MainSection";
import SideMenu from "./components/SideMenu";
import WordDialog from "./components/WordDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { dataApi } from "./api/wordListData";
import { AppActions } from "./@types/app";
import { Word } from "./@types";

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
      <WordDialog />
    </div>
  );
}
