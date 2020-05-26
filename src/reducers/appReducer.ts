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
    case AppActionType.CLOSE_WORD_DIALOG:
      return { ...state, isWordDialogOpened: false };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(state.dummyData) };
    case AppActionType.DELETE_WORD_ITEM:
      state.dummyData.splice(
        state.dummyData.findIndex((e) => e._id === action.payload._id),
        1
      );
      return state;
    case AppActionType.SET_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: true, currFormData: null };
    case AppActionType.SET_UPDATE_WORD_DIALOG:
      return {
        ...state,
        isWordDialogOpened: true,
        currFormData: action.payload,
      };
    case AppActionType.UPDATE_WORD_ITEM:
      state.dummyData.splice(
        state.dummyData.findIndex((e) => e._id === action.payload._id),
        1,
        action.payload
      );
      return state;
    case AppActionType.SWICH_MAIN_SECTION_DATA:
      return { ...state, mainSectionData: action.payload };
    case AppActionType.SET_CURRENT_CATEGORY:
      return { ...state, currCategory: action.payload };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
