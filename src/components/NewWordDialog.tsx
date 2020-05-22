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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
}));

interface ChipData {
  key: number;
  label: string;
}

export default function NewWordDialog() {
  const classes = useStyles();

  const { state } = React.useContext(AppContext);
  const { openNewWordDialog } = useAppActions();

  const handleSubmit = async (e: any) => {};

  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "Inbox" },
    { key: 1, label: "Starred" },
    { key: 2, label: "New Words" },
    { key: 3, label: "Verbs" },
    { key: 4, label: "Cool Adjectives" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

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
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="category"
                label="Add a Category"
                name="category"
                autoComplete="category"
              />
              <Paper elevation={0} component="ul" className={classes.root}>
                {chipData.map((data) => {
                  let icon;

                  if (data.label === "Inbox") {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={
                          data.label === "Inbox"
                            ? undefined
                            : handleDelete(data)
                        }
                        className={classes.chip}
                        color="primary"
                        variant="outlined"
                      />
                    </li>
                  );
                })}
              </Paper>
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
