import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useDialogActions } from "../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import NewOrUpdateWordPage from "./NewOrUpdateWordPage";

export default function AppDialog() {
  const { closeDialog } = useDialogActions();

  const { isDialogOpened } = useSelector((state: RootState) => state.dialog);

  return (
    <Dialog
      open={isDialogOpened}
      onClose={closeDialog}
      aria-labelledby="app-dialog"
    >
      <DialogContent>
        <NewOrUpdateWordPage />
      </DialogContent>
    </Dialog>
  );
}
