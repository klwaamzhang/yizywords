import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import WordListItem from "./WordListItem";
import { useAppActions } from "../../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

  const { filterName } = useParams();
  const fName = filterName.split("-").join(" ");
  const { filterMainSectionList } = useAppActions();
  const { mainSectionData, wordData } = useSelector(
    (state: RootState) => state.app
  );

  useEffect(() => {
    filterMainSectionList(fName);
  }, [fName, wordData]);

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
