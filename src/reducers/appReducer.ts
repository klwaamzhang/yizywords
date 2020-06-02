import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActions } from "../@types/app";
import { dummyData } from "../sampleData/data";

const initialState: AppState = {
  dummyData: dummyData,
  mainSectionData: filterMainSectionData("Inbox", dummyData),
  urlLocationPathname: "/",
};

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActions.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
    case AppActions.UPDATE_WORD_ITEM:
      const newDataUpdate = state.dummyData.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, dummyData: newDataUpdate };
    case AppActions.FILTER_MAIN_SECTION_LIST:
      return {
        ...state,
        mainSectionData: filterMainSectionData(action.payload, state.dummyData),
      };
    case AppActions.UPDATE_MULTIPLE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
