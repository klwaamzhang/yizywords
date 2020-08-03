import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import MainSection from "./MainSection";
import SideMenu from "./SideMenu";
import AppDialog from "./AppDialog/AppDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useWords } from "../../hooks/useWords";
import { useAppActions } from "../../actions";

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

  const { loading } = useWords();

  return (
    <>
      {!loading && (
        <Container className={classes.container} maxWidth="md">
          <Grid className={classes.grid} container spacing={0}>
            <SideMenu />
            <MainSection />
          </Grid>
        </Container>
      )}

      <AppDialog />
    </>
  );
}
