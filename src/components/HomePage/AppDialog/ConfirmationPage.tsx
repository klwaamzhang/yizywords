import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ConfirmationPage() {
  const handleClose = () => {};

  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {"Are you sure to delete this word / phrase?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you confirm, the word / phrase will be deleted permanently.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </div>
  );
}
