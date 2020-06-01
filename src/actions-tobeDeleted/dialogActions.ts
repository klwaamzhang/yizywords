import React from "react";
import { DialogContext } from "../context";
import { DialogActionType } from "../@types/dialog";
import { Word } from "../@types";

export function useDialogActions() {
  const { dispatch } = React.useContext(DialogContext);

  function openNewWordDialog() {
    return dispatch({ type: DialogActionType.OPEN_NEW_WORD_DIALOG });
  }

  function openUpdateWordDialog(formData: Word) {
    return dispatch({
      type: DialogActionType.OPEN_UPDATE_WORD_DIALOG,
      payload: formData,
    });
  }

  function closeWordDialog() {
    return dispatch({ type: DialogActionType.CLOSE_WORD_DIALOG });
  }

  return {
    closeWordDialog,
    openNewWordDialog,
    openUpdateWordDialog,
  };
}
