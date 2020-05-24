import {
  AppState,
  AppAction,
  AppActionType,
  populateCategories,
  removeAWord,
} from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    case AppActionType.TOGGLE_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: !state.isWordDialogOpened };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(state.dummyData) };
    case AppActionType.DELETE_WORD_ITEM:
      return {
        ...state,
        dummyData: removeAWord(action.payload, state.dummyData),
      };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
