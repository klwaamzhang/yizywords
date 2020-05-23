import {
  AppState,
  AppAction,
  AppActionType,
  populateCategories,
} from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    case AppActionType.TOGGLE_NEW_WORD_DIALOG:
      return { ...state, isNewWordDialogOpened: !state.isNewWordDialogOpened };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(state.dummyData) };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
