import React from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { useAppActions, useDialogActions } from "../../../actions";
import { WordActions } from "../../../hooks/useWords";

interface ConfirmationPageProps {
  wordActions: WordActions;
}

export default function ConfirmationPage(props: ConfirmationPageProps) {
  const { currWordItem } = useSelector((state: RootState) => state.dialog);
  // const { deleteWordItemPermanently } = useAppActions();
  const { closeDialog } = useDialogActions();
  const { wordActions } = props;

  const deleteWordItem = async () => {
    if (currWordItem) await wordActions.deleteWord(currWordItem);
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
