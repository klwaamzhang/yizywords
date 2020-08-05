import { Word, User } from "../../types";

type CREATE_NEW_WORD = "CREATE_NEW_WORD";
type UPDATE_WORD_ITEM = "UPDATE_WORD_ITEM";
type DELETE_WORD_ITEM = "DELETE_WORD_ITEM";
type STORE_WORDS = "STORE_WORDS";
type STORE_USER = "STORE_USER";

type actionType = {
  CREATE_NEW_WORD: CREATE_NEW_WORD;
  UPDATE_WORD_ITEM: UPDATE_WORD_ITEM;
  DELETE_WORD_ITEM: DELETE_WORD_ITEM;
  STORE_WORDS: STORE_WORDS;
  STORE_USER: STORE_USER;
};

export const AppActions: actionType = {
  CREATE_NEW_WORD: "CREATE_NEW_WORD",
  UPDATE_WORD_ITEM: "UPDATE_WORD_ITEM",
  DELETE_WORD_ITEM: "DELETE_WORD_ITEM",
  STORE_WORDS: "STORE_WORDS",
  STORE_USER: "STORE_USER",
};

export type AppAction =
  | { type: CREATE_NEW_WORD; payload: Word }
  | { type: UPDATE_WORD_ITEM; payload: Word }
  | { type: DELETE_WORD_ITEM; payload: Word }
  | { type: STORE_WORDS; payload: Word[] }
  | { type: STORE_USER; payload: User };
