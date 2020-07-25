import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { useAppActions, useDialogActions } from "../../../actions";

export default function ConfirmationPage() {
  const { currWordItem } = useSelector((state: RootState) => state.dialog);
  const { deleteWordItemPermanently } = useAppActions();
  const { closeDialog } = useDialogActions();

  const deleteWordItem = () => {
    deleteWordItemPermanently(currWordItem);
    closeDialog();
  };

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
        <Button onClick={deleteWordItem} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </div>
  );
}
