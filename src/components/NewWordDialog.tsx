import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { AppContext } from "../context";
import { useAppActions } from "../actions";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  makeStyles,
  Chip,
  Paper,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

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

export default function NewWordDialog() {
  const classes = useStyles();

  const { state } = React.useContext(AppContext);
  const { openNewWordDialog } = useAppActions();

  const handleSubmit = async (e: any) => {};

  const categoriesForCmp: CateOptionType[] = state.categories.map((item) => {
    return { title: item };
  });

  return (
    <Dialog
      open={state.isNewWordDialogOpened}
      onClose={openNewWordDialog}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Bookmarks />
            </Avatar>
            <Typography component="h1" variant="h5">
              New Word or Phrase
            </Typography>
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
              />
              <Autocomplete
                className={classes.autocmp}
                multiple
                id="tags-filled"
                options={categoriesForCmp.map((option) => option.title)}
                defaultValue={["Inbox"]}
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
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Add a category"
                    placeholder="New"
                    required
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                SAVE
              </Button>
            </form>
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  );
}