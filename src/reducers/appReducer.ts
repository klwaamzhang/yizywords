import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActions } from "../@types/app";

const initialState: AppState = {
  wordData: [],
  mainSectionData: [],
  urlLocationPathname: "/",
  loggedIn: false,
};

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.CREATE_NEW_WORD:
      return { ...state, wordData: [...state.wordData, action.payload] };
    case AppActions.UPDATE_WORD_ITEM:
      const newDataUpdate = state.wordData.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, wordData: newDataUpdate };
    case AppActions.FILTER_MAIN_SECTION_LIST:
      return {
        ...state,
        mainSectionData: filterMainSectionData(action.payload, state.wordData),
      };
    case AppActions.UPDATE_WORD_DATA:
      return { ...state, wordData: action.payload };
    case AppActions.LOGIN:
      return { ...state, loggedIn: true };
    case AppActions.DELETE_WORD_ITEM:
      const deletedDataArrUpdate = state.wordData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, wordData: deletedDataArrUpdate };
    case AppActions.LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
