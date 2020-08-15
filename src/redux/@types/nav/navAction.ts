import { Word } from "../../../realm/types";

type OPEN_SIDE_MENU = "OPEN_SIDE_MENU";
type CLOSE_SIDE_MENU = "CLOSE_SIDE_MENU";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

type actionType = {
  OPEN_SIDE_MENU: OPEN_SIDE_MENU;
  CLOSE_SIDE_MENU: CLOSE_SIDE_MENU;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
};

export const NavActions: actionType = {
  OPEN_SIDE_MENU: "OPEN_SIDE_MENU",
  CLOSE_SIDE_MENU: "CLOSE_SIDE_MENU",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
};

export type NavAction =
  | { type: OPEN_SIDE_MENU }
  | { type: CLOSE_SIDE_MENU }
  | { type: UPDATE_CATEGORIES; payload: Word[] };
