import React from "react";
import { Grid, List } from "@material-ui/core";
import { useStyles } from "../styles/global";
import { AppContext } from "../context";
import WordListItem from "./WordListItem";

export default function MainSection() {
  const classes = useStyles();
  const { state } = React.useContext(AppContext);

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
