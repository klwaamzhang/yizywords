import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    topbarTitle: {
      flexGrow: 1,
      alignSelf: "center",
    },
    h6: {
      fontStyle: "italic",
    },
  })
);

export default function LogoText() {
  const classes = useStyles();

  return (
    <Typography
      variant="h6"
      classes={{ h6: classes.h6 }}
      className={classes.topbarTitle}
    >
      YizyWords
    </Typography>
  );
}
