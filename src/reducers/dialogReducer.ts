import { DialogState, DialogAction, DialogActions } from "../@types/dialog";

const initialState: DialogState = {
  isWordDialogOpened: false,
  currFormData: null,
};

export function dialogReducer(
  state = initialState,
  action: DialogAction
): DialogState {
  switch (action.type) {
    case DialogActions.CLOSE_WORD_DIALOG:
      return { ...state, isWordDialogOpened: false };
    case DialogActions.OPEN_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: true, currFormData: null };
    case DialogActions.OPEN_UPDATE_WORD_DIALOG:
      return {
        ...state,
        isWordDialogOpened: true,
        currFormData: action.payload,
      };
    default:
      return state;
  }
}
