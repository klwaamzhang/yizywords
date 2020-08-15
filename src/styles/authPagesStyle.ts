import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
