import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import { useStyles } from "../styles/global";
import { AppContext, filterMainSectionData } from "../context";
import WordListItem from "./WordListItem";
import { useAppActions } from "../actions";

export default function MainSection() {
  const classes = useStyles();
  const { state } = React.useContext(AppContext);
  const { switchMainSectionMenu } = useAppActions();

  useEffect(() => {
    switchMainSectionMenu(
      filterMainSectionData(state.currCategory, state.dummyData)
    );
  }, [state.dummyData]);

  return (
    <Grid item xs={12} sm={8} className={classes.mainContent}>
      <div className={classes.toolbar} />
      <List>
        {state.mainSectionData.map((item, index) => {
          return <WordListItem item={item} index={index} key={index} />;
        })}
      </List>
    </Grid>
  );
}
