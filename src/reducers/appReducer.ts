import { AppState, AppAction, AppActionType } from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    case AppActionType.OPEN_NEW_WORD_DIALOG:
      return { ...state, isNewWordDialogOpened: !state.isNewWordDialogOpened };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
