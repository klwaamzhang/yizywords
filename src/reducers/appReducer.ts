import { populateCategories, filterMainSectionData } from "../context";
import { AppState, AppAction, AppActionType } from "../@types/app";

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.OPEN_SIDE_MANU:
      return { ...state, isSideMenuOpen: true };
    case AppActionType.CLOSE_SIDE_MANU:
      return { ...state, isSideMenuOpen: false };
    case AppActionType.CLOSE_WORD_DIALOG:
      return { ...state, isWordDialogOpened: false };
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(state.dummyData) };
    case AppActionType.OPEN_NEW_WORD_DIALOG:
      return { ...state, isWordDialogOpened: true, currFormData: null };
    case AppActionType.OPEN_UPDATE_WORD_DIALOG:
      return {
        ...state,
        isWordDialogOpened: true,
        currFormData: action.payload,
      };
    case AppActionType.UPDATE_WORD_ITEM:
      const newDataUpdate = state.dummyData.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, dummyData: newDataUpdate };
    case AppActionType.FILTER_MAIN_SECTION_LIST:
      return {
        ...state,
        mainSectionData: filterMainSectionData(action.payload, state.dummyData),
      };
    case AppActionType.UPDATE_MULTIPLE:
      return { ...state, ...action.payload };
    default:
      throw new Error("error: AppContext reducer error!");
  }
}
