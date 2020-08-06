import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDialogActions } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import NewOrUpdateWordPage from "./NewOrUpdateWordPage";
import ConfirmationPage from "./ConfirmationPage";
import { WordActions } from "../../../realm/hooks/useWords";

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
            return <ConfirmationPage wordActions={props.wordActions} />;
          default:
            return <></>;
        }
      })()}
    </Dialog>
  );
}
