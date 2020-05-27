import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import { AppContext, filterMainSectionData } from "../context";
import WordListItem from "./WordListItem";
import { useAppActions } from "../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      overflow: "auto",
      backgroundColor: "#fff",
    },
    toolbar: theme.mixins.toolbar,
  })
);

export default function MainSection() {
  const classes = useStyles();
  const { state } = React.useContext(AppContext);
  const { switchMainSectionContent } = useAppActions();

  useEffect(() => {
    if (state.currTab !== "Recycle Bin") {
      switchMainSectionContent(
        filterMainSectionData(state.currTab, state.dummyData)
      );
    } else {
      switchMainSectionContent(
        state.dummyData.filter((item) => item.status === "deleted")
      );
    }
  }, [state.dummyData]);

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
