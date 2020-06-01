import { NavState, NavAction, NavActions } from "../@types/nav";
import { populateCategories } from "../utilities/helper";
import { dummyData } from "../sampleData/data";

const initialState: NavState = {
  isSideMenuOpen: false,
  categories: populateCategories(dummyData),
};

export function navReducer(state = initialState, action: NavAction): NavState {
  switch (action.type) {
    case NavActions.OPEN_SIDE_MENU:
      return { ...state, isSideMenuOpen: true };
    case NavActions.CLOSE_SIDE_MENU:
      return { ...state, isSideMenuOpen: false };
    case NavActions.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(action.payload) };
    default:
      return state;
  }
}
