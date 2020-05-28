import { NavState, NavAction, NavActionType } from "../@types/nav";
import { populateCategories } from "../utilities/helper";

export function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case NavActionType.OPEN_SIDE_MANU:
      return { ...state, isSideMenuOpen: true };
    case NavActionType.CLOSE_SIDE_MANU:
      return { ...state, isSideMenuOpen: false };
    case NavActionType.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(action.payload) };
    default:
      throw new Error("error: NavContext reducer error!");
  }
}
