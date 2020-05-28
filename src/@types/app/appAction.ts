import { Word } from "../word";

type OPEN_SIDE_MANU = "OPEN_SIDE_MANU";
type CLOSE_SIDE_MANU = "CLOSE_SIDE_MANU";
type CLOSE_WORD_DIALOG = "CLOSE_WORD_DIALOG";
type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
type SET_NEW_WORD_DIALOG = "SET_NEW_WORD_DIALOG";
type SET_UPDATE_WORD_DIALOG = "SET_UPDATE_WORD_DIALOG";
type UPDATE_WORD_ITEM = "UPDATE_WORD_ITEM";
type SWICH_MAIN_SECTION_DATA = "SWICH_MAIN_SECTION_DATA";
type SET_CURRENT_TAB = "SET_CURRENT_TAB";

type actionType = {
  OPEN_SIDE_MANU: OPEN_SIDE_MANU;
  CLOSE_SIDE_MANU: CLOSE_SIDE_MANU;
  CLOSE_WORD_DIALOG: CLOSE_WORD_DIALOG;
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_CATEGORIES: UPDATE_CATEGORIES;
  SET_NEW_WORD_DIALOG: SET_NEW_WORD_DIALOG;
  SET_UPDATE_WORD_DIALOG: SET_UPDATE_WORD_DIALOG;
  UPDATE_WORD_ITEM: UPDATE_WORD_ITEM;
  SWICH_MAIN_SECTION_DATA: SWICH_MAIN_SECTION_DATA;
  SET_CURRENT_TAB: SET_CURRENT_TAB;
};

export const AppActionType: actionType = {
  OPEN_SIDE_MANU: "OPEN_SIDE_MANU",
  CLOSE_SIDE_MANU: "CLOSE_SIDE_MANU",
  CLOSE_WORD_DIALOG: "CLOSE_WORD_DIALOG",
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
  SET_NEW_WORD_DIALOG: "SET_NEW_WORD_DIALOG",
  SET_UPDATE_WORD_DIALOG: "SET_UPDATE_WORD_DIALOG",
  UPDATE_WORD_ITEM: "UPDATE_WORD_ITEM",
  SWICH_MAIN_SECTION_DATA: "SWICH_MAIN_SECTION_DATA",
  SET_CURRENT_TAB: "SET_CURRENT_TAB",
};

export type AppAction =
  | { type: OPEN_SIDE_MANU }
  | { type: CLOSE_SIDE_MANU }
  | { type: CLOSE_WORD_DIALOG }
  | { type: CREATE_NEW_WORD; payload: Word }
  | { type: UPDATE_CATEGORIES }
  | { type: SET_NEW_WORD_DIALOG }
  | { type: SET_UPDATE_WORD_DIALOG; payload: Word }
  | { type: UPDATE_WORD_ITEM; payload: Word }
  | { type: SWICH_MAIN_SECTION_DATA; payload: string }
  | { type: SET_CURRENT_TAB; payload: string };
