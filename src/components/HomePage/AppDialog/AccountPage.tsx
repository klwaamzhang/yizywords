import React from "react";
// import TextField from "@material-ui/core/TextField";
// import {
//   Avatar,
//   Typography,
//   Button,
//   makeStyles,
//   DialogContent,
//   Container,
//   CssBaseline,
// } from "@material-ui/core";
// import { Lock } from "@material-ui/icons";
// import { User } from "../../../types";
// import { useDialogActions } from "../../../actions";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(1),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginBottom: theme.spacing(3),
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export default function AccountPage() {
  // const classes = useStyles();
  // const { closeDialog } = useDialogActions();

  // const [formData, setFormData] = React.useState<User>({
  //   _id: 200 + Math.floor(Math.random() * 100000),
  //   userName: "",
  //   password: "",
  // });

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   closeDialog();
  // };

  return (
    // <DialogContent>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <div className={classes.paper}>
    //       <Avatar className={classes.avatar}>
    //         <Lock />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Update User Infomation
    //       </Typography>
    //       <form className={classes.form} onSubmit={handleSubmit} method="POST">
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="userName"
    //           label="User Name"
    //           name="userName"
    //           autoComplete="userName"
    //           autoFocus
    //           value={formData.userName}
    //           onChange={(event: any) => {
    //             setFormData({
    //               ...formData,
    //               userName: event.target.value,
    //             });
    //           }}
    //         />
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="password"
    //           label="Password"
    //           name="password"
    //           autoComplete="password"
    //           autoFocus
    //           value={formData.password}
    //           onChange={(event: any) => {
    //             setFormData({
    //               ...formData,
    //               password: event.target.value,
    //             });
    //           }}
    //         />
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           color="primary"
    //           className={classes.submit}
    //         >
    //           Update
    //         </Button>
    //       </form>
    //     </div>
    //   </Container>
    // </DialogContent>
    <></>
  );
}
