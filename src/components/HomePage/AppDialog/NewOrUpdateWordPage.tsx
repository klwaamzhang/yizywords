import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useAppActions, useDialogActions } from "../../../actions";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  makeStyles,
  Chip,
  DialogContent,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { useWords } from "../../../hooks/useWords";
import BSON from "bson";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  autocmp: {
    marginTop: theme.spacing(2),
  },
}));

interface CateOptionType {
  inputValue?: string;
  title: string;
}

export type FormWord = {
  text: string;
  notes: string;
  categories: string[];
  status: string;
};

export default function NewOrUpdateWordPage() {
  const classes = useStyles();

  // const { createNewWord, updateWordItem } = useAppActions();
  const { closeDialog } = useDialogActions();
  const categories = useSelector((state: RootState) => state.nav.categories);
  const { currWordItem } = useSelector((state: RootState) => state.dialog);
  const user = useSelector((state: RootState) => state.app.user);
  const { addWord, updateWord } = useWords();

  const categoriesForCmp: CateOptionType[] = categories.map((item) => {
    return { title: item };
  });

  const [formWord, setFormWord] = React.useState<FormWord>({
    text: "",
    notes: "",
    categories: ["Inbox"],
    status: "active",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formWord.categories.length === 0) {
      alert("Please select at least one category!");
      return;
    }

    if (!currWordItem) {
      if (user)
        await addWord({
          ...formWord,
          _id: new BSON.ObjectId(),
          user: user,
        });
    } else {
      await updateWord(currWordItem?._id, { ...formWord });
    }

    setFormWord({
      text: "",
      notes: "",
      categories: ["Inbox"],
      status: "active",
    });

    closeDialog();
  };

  useEffect(() => {
    if (currWordItem)
      setFormWord({
        text: currWordItem.text,
        notes: currWordItem?.notes || "",
        categories: currWordItem?.categories as string[],
        status: currWordItem.status,
      });
  }, []);

  return (
    <DialogContent>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Bookmarks />
          </Avatar>
          {!currWordItem ? (
            <Typography component="h1" variant="h5">
              New Word or Phrase
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Update Word or Phrase
            </Typography>
          )}
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="newWord"
              label="Word or Phrase"
              name="newWord"
              autoComplete="newWord"
              autoFocus
              value={formWord.text}
              onChange={(event: any) => {
                setFormWord({
                  ...formWord,
                  text: event.target.value,
                });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              name="notes"
              label="Notes"
              type="notes"
              id="notes"
              autoComplete="notes"
              value={formWord.notes}
              onChange={(event: any) => {
                setFormWord({
                  ...formWord,
                  notes: event.target.value,
                });
              }}
            />
            <Autocomplete
              className={classes.autocmp}
              multiple
              id="tags-filled"
              options={categoriesForCmp.map((option) => option.title)}
              freeSolo
              renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              value={formWord.categories}
              onChange={(_: any, value: any) => {
                if (value)
                  setFormWord({
                    ...formWord,
                    categories: value as string[],
                  });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Add a category"
                  placeholder="New"
                />
              )}
            />
            {!currWordItem ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                SAVE
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                UPDATE
              </Button>
            )}
          </form>
        </div>
      </Container>
    </DialogContent>
  );
}
