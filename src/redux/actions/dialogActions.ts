import { DialogActions } from "../@types/dialog";
import { Word } from "../../realm/types";
import { useDispatch } from "react-redux";

export function useDialogActions() {
  const dispatch = useDispatch();

  function openNewWordPage() {
    return dispatch({ type: DialogActions.OPEN_NEW_WORD_PAGE });
  }

  function openUpdateWordPage(formData: Word) {
    return dispatch({
      type: DialogActions.OPEN_UPDATE_WORD_PAGE,
      payload: formData,
    });
  }

  function closeDialog() {
    return dispatch({ type: DialogActions.CLOSE_DIALOG });
  }

  function openConfirmationPage(formData: Word) {
    return dispatch({
      type: DialogActions.OPEN_CONFIRMATION_PAGE,
      payload: formData,
    });
  }

  return {
    closeDialog,
    openNewWordPage,
    openUpdateWordPage,
    openConfirmationPage,
  };
}
