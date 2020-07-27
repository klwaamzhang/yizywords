import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDialogActions } from "../../../actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import NewOrUpdateWordPage from "./NewOrUpdateWordPage";
import ConfirmationPage from "./ConfirmationPage";
import AccountPage from "./AccountPage";

export default function AppDialog() {
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
            return <NewOrUpdateWordPage />;
          case "ConfirmationPage":
            return <ConfirmationPage />;
          case "UpdateUserInfoPage":
            return <AccountPage />;
          default:
            return <></>;
        }
      })()}
    </Dialog>
  );
}
