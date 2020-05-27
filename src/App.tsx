import React from "react";
import { Container, Grid } from "@material-ui/core";
import Topbar from "./components/Topbar";
import MainSection from "./components/MainSection";
import SideMenu from "./components/SideMenu";
import { AppContextProvider } from "./context";
import WordDialog from "./components/WordDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";

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
    <AppContextProvider>
      <div className={classes.root}>
        <Topbar />
        <Container className={classes.container} maxWidth="md">
          <Grid className={classes.grid} container spacing={0}>
            <SideMenu />
            <MainSection />
          </Grid>
        </Container>
        {/* <LoginPage /> */}
      </div>
      <WordDialog />
    </AppContextProvider>
  );
}
