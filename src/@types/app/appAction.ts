import { Word } from "../word";
import { AppState } from "./appState";

type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_WORD_ITEM = "UPDATE_WORD_ITEM";
type FILTER_MAIN_SECTION_LIST = "FILTER_MAIN_SECTION_LIST";
type UPDATE_WORD_DATA = "UPDATE_WORD_DATA";
type LOGIN = "LOGIN";

type actionType = {
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_WORD_ITEM: UPDATE_WORD_ITEM;
  FILTER_MAIN_SECTION_LIST: FILTER_MAIN_SECTION_LIST;
  UPDATE_WORD_DATA: UPDATE_WORD_DATA;
  LOGIN: LOGIN;
};

export const AppActions: actionType = {
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_WORD_ITEM: "UPDATE_WORD_ITEM",
  FILTER_MAIN_SECTION_LIST: "FILTER_MAIN_SECTION_LIST",
  UPDATE_WORD_DATA: "UPDATE_WORD_DATA",
  LOGIN: "LOGIN",
};

export type AppAction =
  | { type: CREATE_NEW_WORD; payload: Word }
  | { type: UPDATE_WORD_ITEM; payload: Word }
  | { type: FILTER_MAIN_SECTION_LIST; payload: string }
  | { type: UPDATE_WORD_DATA; payload: Word[] }
  | { type: LOGIN };
