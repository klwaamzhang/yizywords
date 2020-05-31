import { filterMainSectionData } from "../utilities/helper";
import { AppState, AppAction, AppActionType } from "../@types/app";

export function appReducer(state: AppState, action: AppAction): AppState {
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
      throw new Error("error: AppContext reducer error!");
  }
}
