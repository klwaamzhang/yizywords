import { Word } from "../word";

type OPEN_SIDE_MANU = "OPEN_SIDE_MANU";
type CLOSE_SIDE_MANU = "CLOSE_SIDE_MANU";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

type actionType = {
  OPEN_SIDE_MANU: OPEN_SIDE_MANU;
  CLOSE_SIDE_MANU: CLOSE_SIDE_MANU;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
};

export const NavActionType: actionType = {
  OPEN_SIDE_MANU: "OPEN_SIDE_MANU",
  CLOSE_SIDE_MANU: "CLOSE_SIDE_MANU",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
};

export type NavAction =
  | { type: OPEN_SIDE_MANU }
  | { type: CLOSE_SIDE_MANU }
  | { type: UPDATE_CATEGORIES; payload: Word[] };
