import { DialogActions } from "../@types/dialog";
import { Word } from "../@types";
import { useDispatch } from "react-redux";

export function useDialogActions() {
  const dispatch = useDispatch();

  function openNewWordDialog() {
    return dispatch({ type: DialogActions.OPEN_NEW_WORD_DIALOG });
  }

  function openUpdateWordDialog(formData: Word) {
    return dispatch({
      type: DialogActions.OPEN_UPDATE_WORD_DIALOG,
      payload: formData,
    });
  }

  function closeWordDialog() {
    return dispatch({ type: DialogActions.CLOSE_WORD_DIALOG });
  }

  return {
    closeWordDialog,
    openNewWordDialog,
    openUpdateWordDialog,
  };
}
