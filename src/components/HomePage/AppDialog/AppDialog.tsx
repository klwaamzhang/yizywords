import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDialogActions } from "../../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import NewOrUpdateWordPage from "./NewOrUpdateWordPage";
import ConfirmationPage from "./ConfirmationPage";
import { WordActions } from "../../../hooks/useWords";

interface AppDialogProps {
  wordActions: WordActions;
}

export default function AppDialog(props: AppDialogProps) {
  const { closeDialog } = useDialogActions();

  const { isDialogOpened, dialogPage } = useSelector(
    (state: RootState) => state.dialog
  );

  return (
    <Dialog
      open={isDialogOpened}
      onClose={closeDialog}
      aria-labelledby="app-dialog"
    >
      {(() => {
        switch (dialogPage) {
          case "NewWordPage":
          case "UpdateWordPage":
            return <NewOrUpdateWordPage wordActions={props.wordActions} />;
          case "ConfirmationPage":
            return <ConfirmationPage />;
          default:
            return <></>;
        }
      })()}
    </Dialog>
  );
}
