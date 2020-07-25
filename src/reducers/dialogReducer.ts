import { DialogState, DialogAction, DialogActions } from "../@types/dialog";

const initialState: DialogState = {
  isDialogOpened: false,
  currFormData: null,
  dialogPage: "",
};

export function dialogReducer(
  state = initialState,
  action: DialogAction
): DialogState {
  switch (action.type) {
    case DialogActions.CLOSE_DIALOG:
      return { ...state, isDialogOpened: false, dialogPage: "" };
    case DialogActions.OPEN_NEW_WORD_PAGE:
      return {
        ...state,
        isDialogOpened: true,
        currFormData: null,
        dialogPage: "NewWordPage",
      };
    case DialogActions.OPEN_UPDATE_WORD_PAGE:
      return {
        ...state,
        isDialogOpened: true,
        currFormData: action.payload,
        dialogPage: "UpdateWordPage",
      };
    case DialogActions.OPEN_CONFIRMATION_PAGE:
      return {
        ...state,
        isDialogOpened: true,
        dialogPage: "ConfirmationPage",
      };
    default:
      return state;
  }
}
