import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useAppActions, useDialogActions } from "../actions";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  makeStyles,
  Chip,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Word } from "../@types";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  chip: {
    margin: theme.spacing(0.5),
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  autocmp: {
    marginTop: theme.spacing(2),
  },
}));

interface CateOptionType {
  inputValue?: string;
  title: string;
}

export default function WordDialog() {
  const classes = useStyles();

  const { createNewWord, updateWordItem } = useAppActions();
  const { closeWordDialog } = useDialogActions();

  const categories = useSelector((state: RootState) => state.nav.categories);
  const { isWordDialogOpened, currFormData } = useSelector(
    (state: RootState) => state.dialog
  );

  const categoriesForCmp: CateOptionType[] = categories.map((item) => {
    return { title: item };
  });

  const [formData, setFormData] = React.useState<Word>({
    _id: 10 + Math.floor(Math.random() * 100000),
    text: "",
    notes: "",
    categories: ["Inbox"],
    status: "active",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.categories.length === 0) {
      alert("Please select at least one category!");
      return;
    }
    if (!currFormData) {
      createNewWord(formData);
    } else {
      updateWordItem(formData);
    }
    handleDialogClose();
  };

  const handleDialogClose = () => {
    setFormData({
      _id: 10 + Math.floor(Math.random() * 100000),
      text: "",
      notes: "",
      categories: ["Inbox"],
      status: "active",
    });
    closeWordDialog();
  };

  const handleDialogEntering = () => {
    if (currFormData) setFormData({ ...currFormData });
  };

  console.log("Component: Word Dialog");

  return (
    <Dialog
      open={isWordDialogOpened}
      onEntering={handleDialogEntering}
      onClose={handleDialogClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Bookmarks />
            </Avatar>
            {!currFormData ? (
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
                value={formData.text}
                onChange={(event: any) => {
                  setFormData({
                    ...formData,
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
                value={formData.notes}
                onChange={(event: any) => {
                  setFormData({
                    ...formData,
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
                value={formData.categories}
                onChange={(_: any, value: any) => {
                  if (value)
                    setFormData({
                      ...formData,
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
              {!currFormData ? (
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
    </Dialog>
  );
}
