import { Word } from "../word";
import { AppState } from "./appState";

type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_WORD_ITEM = "UPDATE_WORD_ITEM";
type FILTER_MAIN_SECTION_LIST = "FILTER_MAIN_SECTION_LIST";

type actionType = {
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_WORD_ITEM: UPDATE_WORD_ITEM;
  FILTER_MAIN_SECTION_LIST: FILTER_MAIN_SECTION_LIST;
};

export const AppActions: actionType = {
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_WORD_ITEM: "UPDATE_WORD_ITEM",
  FILTER_MAIN_SECTION_LIST: "FILTER_MAIN_SECTION_LIST",
};

export type AppAction =
  | { type: CREATE_NEW_WORD; payload: Word }
  | { type: UPDATE_WORD_ITEM; payload: Word }
  | { type: FILTER_MAIN_SECTION_LIST; payload: string };
