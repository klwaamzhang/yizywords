import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import { AppContext } from "../context";
import WordListItem from "./WordListItem";
import { useAppActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useHelperFunctions from "../utilities/helper";

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
  const { state } = React.useContext(AppContext);
  const { filterMainSectionList } = useAppActions();

  const { toDisplayFormat } = useHelperFunctions();

  const { filterName } = useParams();
  const categoryName = toDisplayFormat(filterName);
  console.log(filterName);

  useEffect(() => {
    filterMainSectionList(categoryName);
  }, [state.dummyData, categoryName]);

  return (
    <Grid item xs={12} sm={8} className={classes.root}>
      <div className={classes.toolbar} />
      <List>
        {state.mainSectionData.map((item, index) => {
          return <WordListItem item={item} index={index} key={index} />;
        })}
      </List>
    </Grid>
  );
}
