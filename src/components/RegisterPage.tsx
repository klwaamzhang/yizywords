import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Avatar,
  Typography,
  Button,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";
import { Bookmarks } from "@material-ui/icons";
import { User, Word } from "../@types";
import { dataApi } from "../api/wordListData";
import { useAppActions } from "../actions";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
    margin: 10,
  },
  avatar: {
    margin: 15,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    maxWidth: 320,
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  routerLink: {
    color: "#3f51b5",
    fontSize: 12,
  },
}));

export default function RegisterPage() {
  const classes = useStyles();
  const { updateWordData } = useAppActions();
  const { logIn } = useAppActions();

  const [formData, setFormData] = React.useState<User>({
    _id: 200 + Math.floor(Math.random() * 100000),
    userName: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    dataApi.getWordListData.then((rt) => {
      const data = rt as Array<Word>;
      updateWordData(data);
      logIn();
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <Bookmarks />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="userName"
            autoFocus
            value={formData.userName}
            onChange={(event: any) => {
              setFormData({
                ...formData,
                userName: event.target.value,
              });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
            value={formData.password}
            onChange={(event: any) => {
              setFormData({
                ...formData,
                password: event.target.value,
              });
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <RouteLink className={classes.routerLink} to={`/login`}>
                {"Already have an account? Login"}
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
