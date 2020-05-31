import { DialogState, DialogAction, DialogActionType } from "../@types/dialog";

export function dialogReducer(
  state: DialogState,
  action: DialogAction
): DialogState {
  switch (action.type) {
    case DialogActionType.CLOSE_WORD_DIALOG:
      return { ...state, isWordDialogOpened: false };
    case DialogActionType.OPEN_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: true, currFormData: null };
    case DialogActionType.OPEN_UPDATE_WORD_DIALOG:
      return {
        ...state,
        isWordDialogOpened: true,
        currFormData: action.payload,
      };
    default:
      throw new Error("error: DialogContext reducer error!");
  }
}
