import { DialogState, DialogAction, DialogActionType } from "../@types/dialog";

const initialState: DialogState = {
  isWordDialogOpened: false,
  currFormData: null,
};

export function dialogReducer(
  state = initialState,
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
      throw new Error("error: dialog reducer error!");
  }
}
