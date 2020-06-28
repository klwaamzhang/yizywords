import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import MainSection from "./MainSection";
import SideMenu from "./SideMenu";
import WordDialog from "./WordDialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { dataApi } from "../../api/wordListData";
import { Word } from "../../@types";
import { AppActions } from "../../@types/app";

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

export default function Content() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dataApi.getWordListData.then((rt) => {
  //     const data = rt as Array<Word>;
  //     dispatch({
  //       type: AppActions.UPDATE_WORD_DATA,
  //       payload: data,
  //     });
  //   });
  // }, []);

  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Grid className={classes.grid} container spacing={0}>
          <SideMenu />
          <MainSection />
        </Grid>
      </Container>

      <WordDialog />
    </>
  );
}
