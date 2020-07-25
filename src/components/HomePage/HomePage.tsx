import React from "react";
import { Container, Grid } from "@material-ui/core";
import MainSection from "./MainSection";
import SideMenu from "./SideMenu";
import AppDialog from "./AppDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
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

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Grid className={classes.grid} container spacing={0}>
          <SideMenu />
          <MainSection />
        </Grid>
      </Container>

      <AppDialog />
    </>
  );
}
