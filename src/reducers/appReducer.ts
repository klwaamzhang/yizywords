import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActions } from "../@types/app";
// import { wordData } from "../sampleData/data";

const initialState: AppState = {
  wordData: [],
  mainSectionData: [],
  urlLocationPathname: "/",
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
      console.log(state.wordData);
      return {
        ...state,
        mainSectionData: filterMainSectionData(action.payload, state.wordData),
      };
    case AppActions.UPDATE_WORD_DATA:
      return { ...state, wordData: action.payload };
    default:
      return state;
  }
}
