import { NavState, NavAction, NavActions } from "../@types/nav";
import { Word } from "../../realm/types";

const initialState: NavState = {
  isSideMenuOpen: false,
  categories: [],
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

const populateCategories = (data: Word[]) => {
  return data
    .filter((item) => item.status === "active")
    .flatMap((item) => item.categories)
    .reduce((acc, cur) => {
      if (cur && cur !== "Inbox" && acc.indexOf(cur) === -1) {
        acc.push(cur);
      }
      return acc;
    }, new Array<string>());
};
