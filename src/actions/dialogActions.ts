import { DialogActions } from "../@types/dialog";
import { Word } from "../@types";
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

  function openUserInfoPage() {
    return dispatch({
      type: DialogActions.OPEN_UPDATE_USER_INFO_PAGE,
    });
  }

  return {
    closeDialog,
    openNewWordPage,
    openUpdateWordPage,
    openConfirmationPage,
    openUserInfoPage,
  };
}
