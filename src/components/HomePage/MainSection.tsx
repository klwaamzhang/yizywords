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
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { RootState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";
import { useRealmApp } from "../../realm/RealmApp";
import { Word } from "../../realm/types";
import { WordActions } from "../../realm/hooks/useWords";

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

interface MainSectionProps {
  wordActions: WordActions;
}

export default function MainSection(props: MainSectionProps) {
  const classes = useStyles();

  const { filterName }: any = useParams();
  const fName = filterName.split("-").join(" ");
  const { words } = useSelector((state: RootState) => state.app);

  const [filteredWords, setFilteredWords] = React.useState<Word[]>([]);

  const filterMainSectionData = (filterName: string, data: Word[]) => {
    if (filterName === "Recycle Bin") {
      return data.filter((item) => item.status === "deleted");
    }
    return data.filter(
      (item) =>
        item.status !== "deleted" &&
        item.categories?.find((e) => e === filterName)
    );
  };

  useEffect(() => {
    if (fName !== "Setting") {
      setFilteredWords(filterMainSectionData(fName, words));
    }
  }, [fName, words]);

  const app = useRealmApp();

  return (
    <Grid item xs={12} sm={8} className={classes.root}>
      <div className={classes.toolbar} />
      {fName !== "Settings" ? (
        <List>
          {filteredWords.map((item, index) => {
            return (
              <WordListItem
                wordActions={props.wordActions}
                item={item}
                index={index}
                key={index}
              />
            );
          })}
        </List>
      ) : (
        <List>
          <ListItem button onClick={app.logOut}>
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
