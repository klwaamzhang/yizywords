import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActions } from "../@types/app";

const initialState: AppState = {
  words: [],
  filteredWords: [],
  urlLocationPathname: "/",
  loggedIn: false,
  user: undefined,
};

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.CREATE_NEW_WORD:
      return { ...state, words: [...state.words, action.payload] };
    case AppActions.UPDATE_WORD_ITEM:
      const newDataUpdate = state.words.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, words: newDataUpdate };
    case AppActions.FILTER_MAIN_SECTION_LIST:
      return {
        ...state,
        filteredWords: filterMainSectionData(action.payload, state.words),
      };
    case AppActions.UPDATE_WORD_DATA:
      return { ...state, words: action.payload };
    case AppActions.LOGIN:
      return { ...state, loggedIn: true };
    case AppActions.DELETE_WORD_ITEM:
      const deletedDataArrUpdate = state.words.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, words: deletedDataArrUpdate };
    case AppActions.LOGOUT:
      return { ...state, loggedIn: false };
    case AppActions.STORE_WORDS:
      return { ...state, words: action.payload };
    case AppActions.STORE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
