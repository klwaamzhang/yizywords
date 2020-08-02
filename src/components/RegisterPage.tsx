import React from "react";
import TextField from "@material-ui/core/TextField";
import { Avatar, Typography, Button, Paper, Grid } from "@material-ui/core";
import { LockOpen } from "@material-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import { handleRegistration } from "../utilities/authHelper";
import { useStyles } from "../styles/authPagesStyle";
import { useRealmApp } from "../realm/RealmApp";

export default function RegisterPage() {
  const classes = useStyles();

  const app = useRealmApp();

  // Keep track of form input state
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleRegistration(app, email, password)}
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
