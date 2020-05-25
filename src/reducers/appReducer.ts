import {
  AppState,
  AppAction,
  AppActionType,
  populateCategories,
  removeAWord,
  updateAWord,
} from "../context";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDE_MANU:
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen };
    case AppActionType.CLOSE_WORD_DIALOG:
      return { ...state, isWordDialogOpened: false };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(state.dummyData) };
    case AppActionType.DELETE_WORD_ITEM:
      return {
        ...state,
        dummyData: removeAWord(action.payload, state.dummyData),
      };
    case AppActionType.SET_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: true, currFormData: null };
    case AppActionType.SET_UPDATE_WORD_DIALOG:
      return {
        ...state,
        isWordDialogOpened: true,
        currFormData: action.payload,
      };
    case AppActionType.UPDATE_WORD_ITEM:
      return {
        ...state,
        dummyData: updateAWord(action.payload, state.dummyData),
      };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
