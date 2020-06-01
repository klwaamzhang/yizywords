import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActionType } from "../@types/app";
import { dummyData } from "../sampleData/data";

const initialState: AppState = {
  dummyData: dummyData,
  mainSectionData: filterMainSectionData("Inbox", dummyData),
};

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.CREATE_NEW_WORD:
      return { ...state, dummyData: [...state.dummyData, action.payload] };
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
      console.log("appReducer: " + JSON.stringify(action));
      throw new Error("error: app reducer error!");
  }
}
