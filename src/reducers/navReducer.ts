import { NavState, NavAction, NavActionType } from "../@types/nav";
import { populateCategories } from "../utilities/helper";
import { dummyData } from "../sampleData/data";

const initialState: NavState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
};

export function navReducer(state = initialState, action: NavAction): NavState {
  switch (action.type) {
    case NavActionType.OPEN_SIDE_MENU:
      return { ...state, isSideMenuOpen: true };
    case NavActionType.CLOSE_SIDE_MENU:
      return { ...state, isSideMenuOpen: false };
    case NavActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(action.payload) };
    default:
      console.log("appReducer: " + JSON.stringify(action));
      throw new Error("error: nav reducer error!");
  }
}
