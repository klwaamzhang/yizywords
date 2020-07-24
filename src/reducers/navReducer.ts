import { NavState, NavAction, NavActions } from "../@types/nav";
import { populateCategories } from "../utilities/helper";

const initialState: NavState = {
  isSideMenuOpen: false,
  categories: [],
  currCat: "Inbox",
};

export function navReducer(state = initialState, action: NavAction): NavState {
  switch (action.type) {
    case NavActions.OPEN_SIDE_MENU:
      return { ...state, isSideMenuOpen: true };
    case NavActions.CLOSE_SIDE_MENU:
      return { ...state, isSideMenuOpen: false };
    case NavActions.UPDATE_CATEGORIES:
      return { ...state, categories: populateCategories(action.payload) };
    case NavActions.SET_CURRENT_CATGORIE:
      if (state.currCat !== action.payload) {
        return { ...state, currCat: action.payload };
      }
      return state;
    default:
      return state;
  }
}
