import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import WordListItem from "./WordListItem";
import { useAppActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
  })
);

export default function MainSection() {
  const classes = useStyles();
  const { filterMainSectionList } = useAppActions();

  const { mainSectionData, wordData } = useSelector(
    (state: RootState) => state.app
  );

  const currCat = useSelector((state: RootState) => state.nav.currCat);

  console.log("Component: Main Section");

  useEffect(() => {
    console.log("useEffect: Main Section");
    filterMainSectionList(currCat);
  }, [currCat, wordData]);

  return (
    <Grid item xs={12} sm={8} className={classes.root}>
      <div className={classes.toolbar} />
      <List>
        {mainSectionData.map((item, index) => {
          return <WordListItem item={item} index={index} key={index} />;
        })}
      </List>
    </Grid>
  );
}
