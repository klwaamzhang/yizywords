import { AppState, AppAction, AppActionType } from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    case AppActionType.TOGGLE_NEW_WORD_DIALOG:
      return { ...state, isNewWordDialogOpened: !state.isNewWordDialogOpened };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
