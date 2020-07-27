import React, { useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import WordListItem from "./WordListItem";
import { useAppActions } from "../../actions";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ExitToApp, Lock } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
    primary: {
      color: "#ff1744",
      fontWeight: "bold",
    },
    iconRoot: {
      color: "#ff1744",
    },
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
    if (fName !== "Setting") filterMainSectionList(fName);
  }, [fName, wordData]);

  return (
    <Grid item xs={12} sm={8} className={classes.root}>
      <div className={classes.toolbar} />
      {fName !== "Settings" ? (
        <List>
          {mainSectionData.map((item, index) => {
            return <WordListItem item={item} index={index} key={index} />;
          })}
        </List>
      ) : (
        <List>
          <ListItem button>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Update User Information" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon classes={{ root: classes.iconRoot }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText
              primary="LOG OUT"
              classes={{ primary: classes.primary }}
            />
          </ListItem>
          <Divider />
        </List>
      )}
    </Grid>
  );
}
